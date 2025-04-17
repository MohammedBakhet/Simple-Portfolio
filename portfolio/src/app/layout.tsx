import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  metadataBase: new URL('https://mohammedbakhet.com'),
  title: "Mohammed Bakhet | Full-Stack Developer Portfolio",
  description: "A simple portfolio showcasing Mohammed Bakhet's work as a Full-Stack Developer specializing in modern web technologies.",
  keywords: ["Full-Stack Developer", "Web Development", "Portfolio", "React", "Next.js", "TypeScript", "Simple Portfolio"],
  authors: [{ name: "Mohammed Bakhet" }],
  openGraph: {
    title: "Mohammed Bakhet | Simple Developer Portfolio",
    description: "A simple portfolio of Mohammed Bakhet, a Full-Stack Developer specializing in modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Simple Developer Portfolio",
    images: [
      {
        url: '/images/profile.png',
        width: 400,
        height: 400,
        alt: 'Mohammed Bakhet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mohammed Bakhet | Simple Developer Portfolio",
    description: "A simple portfolio of Mohammed Bakhet, a Full-Stack Developer specializing in modern web technologies.",
    images: ['/images/profile.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
