const CONTAINER_MAX = 1280; // 80rem, matches ewg-container

/**
 * Carousel viewports run full-bleed so the next slide can peek past the screen
 * edge. This aligns slides to wherever `ewg-container` would start instead of
 * to the viewport edge, minus the slide's own left padding (the inter-card
 * gap) so the card itself lands on that line.
 */
export function alignToContainer(viewSize: number) {
  const isDesktop = viewSize >= 1024;
  const gutter = isDesktop ? 48 : 24;
  const slidePadding = isDesktop ? 32 : 24;
  return Math.max(gutter, (viewSize - CONTAINER_MAX) / 2 + gutter) - slidePadding;
}
