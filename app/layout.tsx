// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triple Multipurpose Technology | Nigeria",
  description:
    "Nigerian company providing IT, engineering, printing, and training services since 2019",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main>{children}</main>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <Footer />
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
