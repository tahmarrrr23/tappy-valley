import type { NextConfig } from "next";

const config: NextConfig = {
  serverExternalPackages: [
    "puppeteer-core",
    "@sparticuz/chromium-min",
    "@lycorp-jp/tappy",
  ],
};

export default config;
