import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import LogoImage from '@/public/images/logo-white.png';

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '700' ], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiiVER SHOW-ROOM",
  description: "굿즈/키트 제작에 대해 궁금한 내용을 실시간으로 상담해드립니다.",
  keywords: ['웰컴키트', '웰컴키트제작', '굿즈제작', '브랜딩', '키트제작', '단체복', '판촉물', '굿즈마케팅', '패키지 제작', '패키지', '굿즈', '아이돌굿즈', '최애굿즈', '브랜드굿즈', '디자인굿즈', 'DiiVER', '다이버'],
};
export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  width: 'device-width',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className='header'>
          <Link href='https://www.diiver.kr/' target='_blank'>
            <Image src={LogoImage} alt='Logo Image' width={43} height={45} />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
