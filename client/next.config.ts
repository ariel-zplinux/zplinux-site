import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  // Disable in development to allow Turbopack to run without conflicts
  disable: process.env.NODE_ENV === "development",
});

export default withSerwist({
  // Setting this to an empty object tells Next.js 16 we acknowledge Turbopack
  turbopack: {},
  distDir: "dist",
});
