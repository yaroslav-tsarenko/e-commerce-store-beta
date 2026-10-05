export function isBigBuyMetadata(metadata: unknown): boolean {
  return (
    typeof metadata === "object" &&
    metadata !== null &&
    (metadata as Record<string, unknown>).source === "bigbuy"
  );
}

export function bigBuyIdFromMetadata(metadata: unknown): number | null {
  if (!isBigBuyMetadata(metadata)) return null;
  const id = Number((metadata as Record<string, unknown>).bigbuyId);
  return Number.isFinite(id) ? id : null;
}
