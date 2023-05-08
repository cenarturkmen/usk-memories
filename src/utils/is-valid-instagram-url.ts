export function isValidInstagramPhotoUrl(url: string): boolean {
  const regex =
    /^https?:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?(?:\?.*)?$/;
  return regex.test(url);
}
