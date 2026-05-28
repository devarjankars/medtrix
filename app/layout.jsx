import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
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
        <LenisProvider>
          <ScrollToTop />
          {/* <Loader /> */}
          <Navbar />
          <main className="flex-1 w-full bg-[#000000] pt-[72px]">
            <div className="w-full">{children}</div>
          </main>
          <Footer />
        </LenisProvider>
    
      </body>
    </html>
  );
}
