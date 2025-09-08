import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Maulana - Excellence in Innovation",
  description: "Maulana is a leading organization dedicated to innovation, excellence, and transformative solutions across various domains.",
  keywords: "Maulana, innovation, excellence, technology, solutions, services",
  authors: [{ name: "Maulana" }],
  creator: "Maulana",
  publisher: "Maulana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maulana.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maulana - Excellence in Innovation",
    description: "Maulana is a leading organization dedicated to innovation, excellence, and transformative solutions across various domains.",
    url: "https://maulana.in",
    siteName: "Maulana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maulana - Excellence in Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulana - Excellence in Innovation",
    description: "Maulana is a leading organization dedicated to innovation, excellence, and transformative solutions across various domains.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}