import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';

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
      <body>
        {children}
        <a
          href="https://pf.kakao.com/_pGxkPn/chat"
          className="kakao-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="#000000"
          >
            <path d="M12 3C6.48 3 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.85 6.35c-.31.31-.85.09-.85-.35V7.5c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79c-.31.31-.85.09-.85-.35V16.5c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v7c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9.5c0-.28.22-.5.5-.5h1.5c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79z"/>
          </svg>
          카카오톡 상담하기
        </a>
      </body>
    </html>
  );
}
