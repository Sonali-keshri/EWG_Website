import { useId } from "react";

/**
 * The brand's geometric opening quote: two marks with a rounded outer
 * top-left corner and a quarter-circle notch cut out of the inner edge.
 * A single lime-to-ice gradient runs across both marks on the diagonal,
 * so it uses user-space units rather than per-path bounding boxes.
 */
export function QuoteMarks({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 50 45" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="45" x2="50" y2="0">
          <stop offset="0%" stopColor="var(--ewg-lime)" />
          <stop offset="100%" stopColor="var(--ewg-ice)" />
        </linearGradient>
      </defs>
      {/* The second mark is written out at its offset rather than translated:
          a transform would move the user-space gradient with it and restart
          the ramp on each mark instead of running across both. */}
      <g fill={`url(#${gradientId})`}>
        <path d="M12 0H23V11A12 12 0 0 0 11 23H23V45H0V12A12 12 0 0 1 12 0Z" />
        <path d="M39 0H50V11A12 12 0 0 0 38 23H50V45H27V12A12 12 0 0 1 39 0Z" />
      </g>
    </svg>
  );
}
