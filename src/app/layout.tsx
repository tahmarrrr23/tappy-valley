import { globalFont } from "@/libs/font";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="lofi"
      className={`${globalFont.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
