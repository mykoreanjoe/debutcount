'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('2025-05-24T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/debut-logo.png"
              alt="Debut Language School Logo"
              className="mx-auto"
              width={256}
              height={256}
            />
          </div>
          <h2 className="text-[#11609C] text-4xl font-bold mb-6">Great Things Coming Soon</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            <div className="bg-[#11609C] text-white rounded-lg p-4 w-20 md:w-24">
              <div className="text-2xl md:text-3xl font-bold">{days}</div>
              <div className="text-sm">일</div>
            </div>
            <div className="bg-[#11609C] text-white rounded-lg p-4 w-20 md:w-24">
              <div className="text-2xl md:text-3xl font-bold">{hours}</div>
              <div className="text-sm">시간</div>
            </div>
            <div className="bg-[#11609C] text-white rounded-lg p-4 w-20 md:w-24">
              <div className="text-2xl md:text-3xl font-bold">{minutes}</div>
              <div className="text-sm">분</div>
            </div>
            <div className="bg-[#11609C] text-white rounded-lg p-4 w-20 md:w-24">
              <div className="text-2xl md:text-3xl font-bold">{seconds}</div>
              <div className="text-sm">초</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-[#11609C] text-2xl font-bold mb-4">초1~중3, 같이 완성 데뷰 영어학원</h2>
          <p className="text-[#7fa6c3] mb-4">
            현재 신목초, 목동초, 목일중, 목동중을 중심으로 운영 되고 있습니다.
          </p>
          <div className="bg-[#f5f8fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#11609C] text-xl font-bold mb-4">'우리 아이의 영어 학습 현황은 어떤가요?'</h3>
            <p className="text-[#7fa6c3] mb-6">
              같이 완성이라는 한 목표를 위해, 다양한 학습 고충을 해결하려 합니다.
            </p>
            <ul className="text-left text-[#7fa6c3] space-y-3">
              <li>1. 학습 방법에 대한 혼란 [적합한 교재, 방법, 영역별 초점]</li>
              <li>2. 아이의 동기 부여 문제 [흥미 반복학습 거부 목표 설정 밸런스 붕괴]</li>
              <li>3. 학습 성과의 가시성 부족 [단시간 결과 불가능 학원과 가정의 학습 성과 차이 평가 정확성]</li>
              <li>4. 적절한 환경 조성의 어려움 [인풋 노출 부모 영어 실력]</li>
              <li>5. 학습 지속성과 장기 목표 설정의 어려움 [사춘기 단기 장기 로드맵]</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://pf.kakao.com/_pGxkPn/chat" 
             className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
            카카오톡 상담하기
          </a>
          <a href="https://blog.naver.com/ourdebut" 
             className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
            블로그 방문하기
          </a>
          <a href="https://band.us/n/a0aaA1P6G2R8v" 
             className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
            밴드 가입하기
          </a>
          <a href="https://map.naver.com/p/entry/place/1531784280?c=15.00,0,0,0,dh" 
             className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
            위치 보기
          </a>
        </div>

        <div className="text-center text-[#7fa6c3] text-sm">
          <p>학원 등록 번호: 6382호</p>
          <p>사업자 정보: 524-95-01777</p>
          <p>주소: 서울특별시 양천구 신목로 38 202호 (08015)</p>
          <p>전화번호: 02-6952-1131</p>
        </div>
      </main>
    </div>
  );
} 