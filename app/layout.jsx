import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LenisProvider from "@/components/LenisProvider";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-albert-sans",
});

export const metadata = {
  title: "Medtrix",
  description: "Medtrix App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable} suppressHydrationWarning>
      <body className={`${albertSans.className} min-h-screen flex flex-col bg-black`}>
        <script dangerouslySetInnerHTML={{ __html: `window.history.scrollRestoration='manual';window.scrollTo(0,0);` }} />
        <ScrollToTop />
        <LenisProvider>
        <Navbar />
        <main className="flex-1 bg-[#000000]">
          <div className="max-w-7xl mx-auto px-6">{children}</div>
        </main>
        <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
