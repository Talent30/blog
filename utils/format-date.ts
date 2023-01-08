export function formatDate(input: string) {
  const date = new Date(input);
  return date.toLocaleDateString('en-NZ', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
