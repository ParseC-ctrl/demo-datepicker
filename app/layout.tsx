import type { Metadata } from "next";
import "./styles/globals.css";
export const metadata: Metadata = {
  title: "Demo-Datepicker",
  description:
    "NextJs + RadixUI + PandaCSS + React Date Picker 实现一个小而美的日期组件",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
