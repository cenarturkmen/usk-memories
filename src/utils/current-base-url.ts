export function currentBaseUrl() {
  const { protocol, host } = window.location;
  return `${protocol}//${host}`;
}
