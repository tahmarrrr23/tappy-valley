import type { NextConfig } from "next";

const config: NextConfig = {
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium-min"],
};

export default config;
