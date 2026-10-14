import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/navbar/Navbar";
import { Providers } from "@/providers/Providers";
import Footer from "@/component/layout/footer/Footer";

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
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
