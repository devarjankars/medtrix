const CDN = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image";

/**
 * Converts a local public path like "/logo.png" to a CDN URL.
 * Usage: cdn("/logo.png") → "https://d218mh3sadleh5.cloudfront.net/.../logo.png"
 */
export function cdn(path) {
  // Already a full URL — return as-is
  if (path.startsWith("http")) return path;
  // Strip leading slash and append to CDN base
  return `${CDN}/${path.replace(/^\//, "")}`;
}

export default cdn;
