import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only serves qualities on this allowlist; 90 keeps the
    // photography from softening when it is scaled up in the card layouts.
    qualities: [75, 90],
  },
};

export default nextConfig;
