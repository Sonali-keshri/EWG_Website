const CONTAINER_MAX = 1280; // 80rem, matches --ewg-max
const NAV_INSET = 64; // 4rem, matches header px-16

/**
 * Carousel viewports run full-bleed so the next slide can peek past the screen
 * edge. This aligns slides to the same start line as `ewg-container` (the logo
 * inside the px-16 navbar), minus the slide's own left padding so the card
 * itself lands on that line.
 */
export function alignToContainer(viewSize: number) {
  const gutter = viewSize >= 1024 ? 48 : 24;
  const slidePadding = viewSize >= 1024 ? 32 : 24;
  const centering = Math.max(0, (viewSize - CONTAINER_MAX) / 2);
  const pad = Math.max(gutter, NAV_INSET + gutter - centering);
  return pad - slidePadding;
}
