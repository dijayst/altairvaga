import { Nunito, Space_Mono } from "next/font/google";
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // adjust as needed
  variable: '--font-nunito',
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
