import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { UIModeProvider } from "./context/UIModeContext";
// import UIModeToggle from "./components/UIModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Landon Borrego | Full-Stack Software Developer",
  description: "Portfolio of Landon Borrego, a full-stack software developer. Explore my projects, tech stack, work experience, and volunteer work, or get in touch.",
  metadataBase: new URL("https://landon-b.com"),
  openGraph: {
    title: "Landon Borrego | Full-Stack Software Developer",
    description:
      "Portfolio of Landon Borrego, a full-stack software developer. Explore my projects, tech stack, who I am, or get in touch.",
    url: "/",
    siteName: "Landon Borrego",
    images: [
      {
        url: "/images/og-landon-borrego.png",
        width: 1200,
        height: 630,
        alt: "Landon Borrego Open Graph Info Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <UIModeProvider> */}
        {children}
          {/* <UIModeToggle/> */}
        {/* </UIModeProvider> */}
      </body>
    </html>
  );
}
