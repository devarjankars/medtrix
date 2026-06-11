import { Albert_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import LenisProvider from "@/components/LenisProvider";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import MainWrapper from "@/components/MainWrapper";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-albert-sans",
});

export const metadata = {
  title: "MedTrix | Medical Communications, Medical Affairs & AI Solutions",
  description: "MedTrix is a global Medical Communications and Medical Affairs partner delivering scientific content, HCP engagement, Omnichannel strategies, AI solutions, and launch strategies.",
  keywords: "medical communications agency, medical affairs solutions, scientific communications agency, healthcare communications, HCP engagement solutions, medical animation, 3D MOA videos, AR VR healthcare, HCP website development, Veeva content development, AI for medical affairs, AI MLR review solutions, AI-assisted content creation, omnichannel engagement, pharmaceutical communications, life sciences partner",
  icons: {
    icon: "https://otterboo.sirv.com/Medtrix%20Images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable} suppressHydrationWarning>
      <body className={`${albertSans.className} min-h-screen flex flex-col bg-black`}>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MC9NSK5D');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC9NSK5D"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LenisProvider>
          <ScrollToTop />
          <Loader />
          <ConditionalNavbar />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
