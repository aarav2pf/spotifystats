export function formatNumber(num) {
  if (typeof num !== "number") return num;
  return num.toLocaleString();
}

export function randomListeners() {
  return Math.floor(Math.random() * (100_000_000 - 10_000_000)) + 10_000_000;
}
