function equalUrls(url1: string, url2: string): boolean {
  try {
    const parsedUrl1 = new URL(url1);
    const parsedUrl2 = new URL(url2);

    // Normalize pathname by removing trailing slashes
    const normalizePathname = (url: URL): string => url.pathname.replace(/\/+$/, "");

    return parsedUrl1.hostname === parsedUrl2.hostname && normalizePathname(parsedUrl1) === normalizePathname(parsedUrl2);
  } catch (e) {
    // If URL parsing fails, return false
    return false;
  }
}

export { equalUrls };
