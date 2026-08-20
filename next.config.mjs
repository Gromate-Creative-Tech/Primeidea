import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "login.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "verification.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/legacy-inheritance-planning",
        destination: "/legacy-succession-estate-planning-india",
        permanent: true,
      },
      {
        source: "/legacy-inheritance-planning/",
        destination: "/legacy-succession-estate-planning-india",
        permanent: true,
      },
      {
        source: "/retirement-planning",
        destination: "/retirement-planning-vadodara",
        permanent: true,
      },
      {
        source: "/retirement-planning/",
        destination: "/retirement-planning-vadodara",
        permanent: true,
      },
      {
        source: "/insurance",
        destination: "/insurance-planning-vadodara",
        permanent: true,
      },
      {
        source: "/insurance/",
        destination: "/insurance-planning-vadodara",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
