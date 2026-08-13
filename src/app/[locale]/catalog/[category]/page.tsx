import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProductGrid } from "@/components/product/ProductGrid/ProductGrid";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { getDescendantCategoryIds } from "@/lib/category-tree";
import { localizeProductCards, translateBatch } from "@/lib/translate";

export const revalidate = 60;

const PAGE_SIZE = 60;

interface CategoryPageProps {
  params: Promise<{ category: string; locale: string }>;
  searchParams?: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;

  const category = await prisma.category.findUnique({
    where: { slug },
    select: { name: true, description: true, slug: true },
  });

  if (!category) return {};

  return {
    title: category.name,
    description:
      category.description ||
      `Shop ${category.name} products at MisaElectro. Browse electronics, accessories, electrical materials and installation supplies.`,
    alternates: { canonical: `/catalog/${category.slug}` },
    openGraph: {
      title: `${category.name} | MisaElectro`,
      description:
        category.description ||
        `Shop ${category.name} products at MisaElectro.`,
      url: `/catalog/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: slug, locale } = await params;
  const sp = (await searchParams) || {};
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);

  const category = await prisma.category.findUnique({
    where: { slug },
    select: { id: true, name: true, description: true, slug: true },
  });

  if (!category) notFound();

  const categoryIds = await getDescendantCategoryIds(category.id);

  const where = {
    status: "ACTIVE" as const,
    images: { some: {} },
    categories: { some: { categoryId: { in: categoryIds } } },
  };

  const [productsRaw, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      select: {
        id: true,
        name: true,
        slug: true,
        sku: true,
        price: true,
        comparePrice: true,
        quantity: true,
        images: {
          select: { url: true, alt: true },
          orderBy: { sortOrder: "asc" },
          take: 1,
        },
        categories: {
          select: { category: { select: { name: true } } },
          take: 1,
        },
      },
    }),
    prisma.product.count({ where }),
  ]);

  const productsRawMapped = productsRaw.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    sku: p.sku,
    price: Number(p.price),
    comparePrice: p.comparePrice == null ? null : Number(p.comparePrice),
    quantity: p.quantity,
    images: p.images.map((i) => ({ url: i.url, alt: i.alt })),
    categories: p.categories.map((pc) => ({ category: { name: pc.category.name, slug: "" } })),
  }));

  // Translate card names + category name/description into the active locale.
  const [products, catNameMap, descMap, t, tNav] = await Promise.all([
    localizeProductCards(productsRawMapped, locale),
    translateBatch([category.name], locale),
    category.description
      ? translateBatch([category.description], locale, "html")
      : Promise.resolve(new Map<string, string>()),
    getTranslations("catalog"),
    getTranslations("nav"),
  ]);
  const categoryName = catNameMap.get(category.name) ?? category.name;
  const categoryDescription = category.description
    ? descMap.get(category.description) ?? category.description
    : null;

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const basePath = `/catalog/${category.slug}`;

  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 1rem 3rem", overflowWrap: "anywhere" }}>
      <Breadcrumbs
        items={[
          { label: tNav("home"), href: "/" },
          { label: tNav("catalog"), href: "/catalog" },
          { label: categoryName },
        ]}
      />

      <h1 style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", wordBreak: "break-word" }}>
        {categoryName}
      </h1>

      {categoryDescription && (
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "1.5rem", fontSize: "0.9375rem", lineHeight: 1.6 }}>
          {categoryDescription}
        </p>
      )}

      <p style={{ color: "var(--color-text-tertiary)", marginBottom: "1.5rem", fontSize: "0.8125rem" }}>
        {t("results", { count: total.toLocaleString() })}
      </p>

      <ProductGrid products={products} />

      {totalPages > 1 && (
        <nav
          aria-label={t("paginationAria")}
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {page > 1 && (
            <a
              href={`${basePath}?page=${page - 1}`}
              style={{
                padding: "0.5rem 0.875rem",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              {t("previous")}
            </a>
          )}
          <span style={{ padding: "0.5rem 0.875rem", color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>
            {t("page", { page, total: totalPages })}
          </span>
          {page < totalPages && (
            <a
              href={`${basePath}?page=${page + 1}`}
              style={{
                padding: "0.5rem 0.875rem",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              {t("next")}
            </a>
          )}
        </nav>
      )}
    </div>
  );
}
