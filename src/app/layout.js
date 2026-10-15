import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

// Required Slick Stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/component/layout/navbar/Navbar";
import { Providers } from "@/providers/Providers";
import Footer from "@/component/layout/footer/Footer";
import ScrollToTopProgress from "@/component/ui/ScrollToTopProgress";
import { Suspense } from "react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "Hazaratpur Alumni Association",
  description: "A platform of Hazaratpur Alumni Association",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Providers>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />

          {/* Scroll-to-top circular progress widget fixed at bottom-right */}
          <Suspense>
            <ScrollToTopProgress />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
