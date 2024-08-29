export function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  const k = num / 1000;

  if (k < 10) {
    return k.toFixed(1) + 'k';
  }

  return k.toFixed(0) + 'k';
}
