export function toTitleCase(s) {
  return String(s ?? "")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
