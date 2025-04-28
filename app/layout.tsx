import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '데뷰 영어학원',
  description: '초1~중3, 같이 완성 데뷰 영어학원',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
