import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, // Prevenção contra Clickjacking
  { key: 'X-Content-Type-Options', value: 'nosniff' }, // Previne MIME Sniffing atacks
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  // Removeu-se X-XSS-Protection porque não tem mais suporte nos navegadores modernos e a CSP é superior
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
