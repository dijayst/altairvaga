'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Spinninglogo from "@/components/Spinninglogo";
import { usePathname } from "next/navigation";
import { Content } from "@/components/content";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname = usePathname();
  const showLogoAndContent = pathname !== '/blog';
  let contentText1 = '';
  let contentTex2 = '';
   let contentTex3 = '';
    if (pathname === '/about') {
      contentText1 = 'We help organizations'
contentTex2='transform their impact.';
    } else if (pathname === '/contact') {
      contentText1 = 'Are you ready to rally'
      contentTex2=' around your big idea?';
    }else if (pathname === '/service') {
      contentText1 = ' More customers, more '
   contentTex2=   'revenue, more quickly.';
    }else if (pathname === '/') {
      contentText1 = ' Create the growth'
   contentTex2=   'your company is'
   contentTex3='capable of.';
    }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>

       {showLogoAndConte && (
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:min-h-screen pt-20 lg:pt-40 bg-[#f1f1f1]">
              <div className="flex w-full lg:w-[82%] items-center justify-center">
                <Content text={contentText1} text2={contentTex2} text3={contentTex3} />
              </div>
              <div className="flex w-full lg:w-[18%] max-h-[12rem] items-center lg:items-end justify-center lg:justify-end">
                <Spinninglogo />
              </div>
            </div>

 )}
           {children}
         
          

         
       <Footer/>
      </body>
    </html>
  );
}
