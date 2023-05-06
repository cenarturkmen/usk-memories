export function convertInstagramUrl(url: string): string {
  // Remove any query parameters or fragment identifier
  url = url.split("?")[0].split("#")[0];

  // Ensure the URL ends with a forward slash
  if (!url.endsWith("/")) {
    url += "/";
  }

  return url;
}
