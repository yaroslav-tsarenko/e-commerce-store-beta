"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Copy, Download, ExternalLink, Rss, Table2 } from "lucide-react";
import { toast } from "sonner";

const feeds = [
  { name: "price.ro", type: "price-ro", url: "/api/feeds/price-feed-ro", format: "TXT", previewable: true },
  { name: "Google Merchant", type: "google", url: "/api/feeds/google", format: "XML" },
  { name: "Facebook / Instagram", type: "facebook", url: "/api/feeds/facebook", format: "CSV" },
  { name: "Generic Feed", type: "generic", url: "/api/feeds/generic", format: "JSON" },
] as const;

const PRICE_RO_COLUMNS = [
  "Cod unic",
  "Categorii",
  "Producător",
  "Model",
  "Cod producător",
  "Preț",
  "Moneda",
  "Stoc",
  "Transport",
  "Garanție",
  "Link",
  "Imagine",
  "Descriere",
];

const PREVIEW_LIMIT = 100;

export default function AdminFeedsPage() {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";

  const [rows, setRows] = useState<string[][] | null>(null);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);

  const copyUrl = (path: string) => {
    navigator.clipboard.writeText(`${siteUrl}${path}`);
    toast.success("Feed URL copied to clipboard");
  };

  const download = async (path: string, filename: string) => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Feed downloaded");
    } catch {
      toast.error("Failed to download feed");
    }
  };

  const loadPreview = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/feeds/price-feed-ro");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const allLines = text.split("\n").filter((l) => l.trim().length > 0);
      setTotalRows(allLines.length);
      setRows(allLines.slice(0, PREVIEW_LIMIT).map((line) => line.split("|")));
    } catch {
      toast.error("Failed to load preview");
      setRows(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <h1 className="admin-page-title" style={{ marginBottom: "1.5rem" }}>Product Feeds</h1>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        {feeds.map((feed, i) => (
          <motion.div
            key={feed.type}
            className="admin-item-card"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ padding: "0.75rem", borderRadius: "12px", background: "rgba(255,255,255,0.06)" }}>
                <Rss size={20} style={{ color: "var(--admin-text-secondary)" }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: "var(--admin-text)" }}>{feed.name}</h3>
                <p style={{ fontSize: "0.75rem", color: "var(--admin-text-muted)", fontFamily: "var(--font-mono)" }}>{feed.url}</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="admin-badge admin-badge-default">{feed.format}</span>
              <Button size="sm" variant="flat" startContent={<Copy size={14} />} onPress={() => copyUrl(feed.url)}>
                Copy URL
              </Button>
              <Button
                size="sm"
                variant="flat"
                startContent={<Download size={14} />}
                onPress={() => download(feed.url, `${feed.type}-feed.${feed.format.toLowerCase()}`)}
              >
                Export
              </Button>
              {"previewable" in feed && feed.previewable && (
                <Button size="sm" variant="flat" startContent={<Table2 size={14} />} onPress={loadPreview} isLoading={loading}>
                  Preview table
                </Button>
              )}
              <Button size="sm" variant="flat" as="a" href={feed.url} target="_blank" startContent={<ExternalLink size={14} />}>
                Open
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {rows && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: "2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <h2 style={{ fontWeight: 600, color: "var(--admin-text)" }}>price.ro preview</h2>
            <span style={{ fontSize: "0.8125rem", color: "var(--admin-text-muted)" }}>
              {rows.length < totalRows
                ? `Showing ${rows.length} of ${totalRows} products`
                : `${totalRows} products`}
            </span>
          </div>

          <div className="admin-table-container" style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  {PRICE_RO_COLUMNS.map((col) => (
                    <th key={col} style={{ whiteSpace: "nowrap" }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((cells, r) => (
                  <tr key={r}>
                    {PRICE_RO_COLUMNS.map((_, c) => {
                      const value = cells[c] ?? "";
                      const isLink = c === 10 || c === 11;
                      const isDesc = c === 12;
                      return (
                        <td
                          key={c}
                          style={{
                            maxWidth: isDesc ? "360px" : "220px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "0.8125rem",
                            color: "var(--admin-text-secondary)",
                          }}
                          title={value}
                        >
                          {isLink && value ? (
                            <a href={value} target="_blank" rel="noreferrer" style={{ color: "var(--admin-accent)" }}>
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
