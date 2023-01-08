export function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

export function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}
