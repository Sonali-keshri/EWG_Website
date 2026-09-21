function StackIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-[4.5rem] w-[4.5rem] text-navy">
      {children}
    </svg>
  );
}

export const stackIcons = {
  utilities: (
    <StackIcon>
      <ellipse cx="36" cy="22" rx="16" ry="6" fill="currentColor" />
      <path
        fill="currentColor"
        d="M20 22v18c0 3.3 7.2 6 16 6s16-2.7 16-6V22c0 3.3-7.2 6-16 6s-16-2.7-16-6Z"
      />
      <circle cx="18" cy="12" r="3.2" fill="currentColor" />
      <circle cx="36" cy="8" r="3.2" fill="currentColor" />
      <circle cx="54" cy="12" r="3.2" fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        d="M18 12v8M36 8v8M54 12v8"
      />
    </StackIcon>
  ),
  erp: (
    <StackIcon>
      <rect x="22" y="28" width="28" height="22" rx="3" fill="currentColor" />
      <rect x="26" y="18" width="20" height="10" rx="2" fill="currentColor" />
      <circle cx="48" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <path fill="currentColor" d="M47 16h2v5h-2z" />
      <circle cx="30" cy="36" r="1.8" fill="white" />
      <circle cx="36" cy="36" r="1.8" fill="white" />
      <circle cx="42" cy="36" r="1.8" fill="white" />
    </StackIcon>
  ),
  cloud: (
    <StackIcon>
      <path
        fill="currentColor"
        d="M46 28a12 12 0 0 0-22.4-4.2A10 10 0 0 0 22 44h26a10 10 0 0 0 2-19.8Z"
      />
      <circle cx="24" cy="56" r="3" fill="currentColor" />
      <circle cx="36" cy="58" r="3" fill="currentColor" />
      <circle cx="50" cy="56" r="3" fill="currentColor" />
      <path fill="none" stroke="currentColor" strokeWidth="2.4" d="M28 42v11M36 44v11M44 42v11" />
    </StackIcon>
  ),
  data: (
    <StackIcon>
      <path
        fill="currentColor"
        d="M22 18h20l8 8v28a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4Z"
      />
      <path fill="white" d="M42 18v8h8" />
      <rect x="38" y="36" width="18" height="18" rx="3" fill="currentColor" />
      <circle cx="47" cy="45" r="4" fill="none" stroke="white" strokeWidth="2" />
    </StackIcon>
  ),
  beyond: (
    <StackIcon>
      <circle cx="36" cy="36" r="6" fill="currentColor" />
      <ellipse cx="36" cy="36" rx="22" ry="9" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse
        cx="36"
        cy="36"
        rx="22"
        ry="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(60 36 36)"
      />
      <ellipse
        cx="36"
        cy="36"
        rx="22"
        ry="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(-60 36 36)"
      />
    </StackIcon>
  ),
} as const;
