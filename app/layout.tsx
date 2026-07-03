import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

const SideGridSvg = () => (
  <svg width="70" height="1424" viewBox="0 0 70 1424" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70px] h-auto object-contain">
    <g clipPath="url(#clip0_609_2341)">
      <line x1="1.5" y1="2200" x2="1.5" y2="-355.001" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1134.63" x2="-522.543" y2="-98.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1154.63" x2="-522.543" y2="-78.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1174.63" x2="-522.543" y2="-58.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1194.63" x2="-522.543" y2="-38.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1214.63" x2="-522.543" y2="-18.684" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1234.63" x2="-522.543" y2="1.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1254.63" x2="-522.543" y2="21.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1274.63" x2="-522.543" y2="41.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1294.63" x2="-522.543" y2="61.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1314.63" x2="-522.543" y2="81.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1334.63" x2="-522.543" y2="101.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="634.627" x2="-522.543" y2="-598.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="614.627" x2="-522.543" y2="-618.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="594.627" x2="-522.543" y2="-638.684" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1354.63" x2="-522.543" y2="121.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="654.627" x2="-522.543" y2="-578.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1374.63" x2="-522.543" y2="141.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="674.627" x2="-522.543" y2="-558.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1394.63" x2="-522.543" y2="161.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="694.627" x2="-522.543" y2="-538.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1414.63" x2="-522.543" y2="181.316" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="714.627" x2="-522.543" y2="-518.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1434.63" x2="-522.543" y2="201.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="734.627" x2="-522.543" y2="-498.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1454.63" x2="-522.543" y2="221.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="754.627" x2="-522.543" y2="-478.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1474.63" x2="-522.543" y2="241.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="774.627" x2="-522.543" y2="-458.684" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1494.63" x2="-522.543" y2="261.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="794.627" x2="-522.543" y2="-438.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1514.63" x2="-522.543" y2="281.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="814.627" x2="-522.543" y2="-418.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1534.63" x2="-522.543" y2="301.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="834.627" x2="-522.543" y2="-398.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1554.63" x2="-522.543" y2="321.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="854.627" x2="-522.543" y2="-378.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1574.63" x2="-522.543" y2="341.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="874.627" x2="-522.543" y2="-358.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1594.63" x2="-522.543" y2="361.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="894.627" x2="-522.543" y2="-338.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1614.63" x2="-522.543" y2="381.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="914.627" x2="-522.543" y2="-318.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1634.63" x2="-522.543" y2="401.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="934.627" x2="-522.543" y2="-298.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1654.63" x2="-522.543" y2="421.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="954.627" x2="-522.543" y2="-278.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1674.63" x2="-522.543" y2="441.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="974.627" x2="-522.543" y2="-258.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1694.63" x2="-522.543" y2="461.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="994.627" x2="-522.543" y2="-238.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1714.63" x2="-522.543" y2="481.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1014.63" x2="-522.543" y2="-218.684" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1734.63" x2="-522.543" y2="501.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1034.63" x2="-522.543" y2="-198.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1754.63" x2="-522.543" y2="521.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1054.63" x2="-522.543" y2="-178.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1774.63" x2="-522.543" y2="541.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1074.63" x2="-522.543" y2="-158.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1794.63" x2="-522.543" y2="561.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1094.63" x2="-522.543" y2="-138.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1814.63" x2="-522.543" y2="581.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1114.63" x2="-522.543" y2="-118.684" stroke="#D9D9D9" strokeDasharray="8 8"/>
      {/* Newly appended lines below to fill canvas down to 1424px height */}
      <line x1="710.768" y1="1834.63" x2="-522.543" y2="601.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1854.63" x2="-522.543" y2="621.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1874.63" x2="-522.543" y2="641.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1894.63" x2="-522.543" y2="661.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1914.63" x2="-522.543" y2="681.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1934.63" x2="-522.543" y2="701.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1954.63" x2="-522.543" y2="721.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1974.63" x2="-522.543" y2="741.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="1994.63" x2="-522.543" y2="761.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2014.63" x2="-522.543" y2="781.316" stroke="#3CE0BF" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2034.63" x2="-522.543" y2="801.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2054.63" x2="-522.543" y2="821.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2074.63" x2="-522.543" y2="841.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2094.63" x2="-522.543" y2="861.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2114.63" x2="-522.543" y2="881.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2134.63" x2="-522.543" y2="901.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2154.63" x2="-522.543" y2="921.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2174.63" x2="-522.543" y2="941.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2194.63" x2="-522.543" y2="961.316" stroke="#D9D9D9" strokeDasharray="8 8"/>
      <line x1="710.768" y1="2214.63" x2="-522.543" y2="981.316" stroke="#3CE0BF" strokeDasharray="8 8"/>
    </g>
    <defs>
      <clipPath id="clip0_609_2341">
        <rect width="227" height="1424" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${manrope.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        {/* Background Side Grids */}
        <div className="hidden md:block pointer-events-none absolute top-0 left-0 z-[-10] select-none -scale-x-100">
          <SideGridSvg />
        </div>
        <div className="hidden md:block pointer-events-none absolute top-0 right-0 z-[-10] ">
          <SideGridSvg />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


