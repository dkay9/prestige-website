export function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9]/g, ""));
}

export function formatCompactPrice(value: number): string {
  if (value >= 1_000_000_000) return `₦${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `₦${Math.round(value / 1_000_000)}M`;
  return `₦${value.toLocaleString()}`;
}