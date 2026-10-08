export const metadata = {
  title: "News & Updates | MedTrix",
  description: "Stay informed with the latest MedTrix news, awards, events, and company updates.",
  keywords: "MedTrix news, healthcare industry news, medical communications news, pharma updates, MedTrix awards, life sciences events, company announcements",
  alternates: { canonical: "https://www.medtrixhealthcare.com/news" },
  openGraph: {
    title: "News & Updates | MedTrix",
    description: "Stay informed with the latest MedTrix news, awards, events, and company updates.",
    url: "https://www.medtrixhealthcare.com/news",
    siteName: "MedTrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | MedTrix",
    description: "Stay informed with the latest MedTrix news, awards, events, and company updates.",
  },
};

export default function Layout({ children }) {
  return children;
}
