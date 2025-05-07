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
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-3xl px-6 py-16 flex flex-col items-center">
        <img
          src="/debut-logo.png"
          alt="Debut Language School Logo"
          className="w-24 h-24 mb-8"
        />
        
        <h1 className="text-[#11609C] text-4xl md:text-5xl font-extrabold text-center tracking-tight">
          가장 완성도 높은
        </h1>
        <h1 className="text-[#11609C] text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-tight">
          데뷰 영어
        </h1>
        
        <h2 className="text-gray-600 text-lg md:text-xl font-medium text-center mb-8">
          신목초 · 목동초 · 목일중 · 목동중
        </h2>
        
        {/* 3중 관리 시스템 - 중앙 배치 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 w-full mb-10">
          <h3 className="text-center text-[#11609C] text-xl font-bold mb-6">3중 관리 시스템</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#11609C] rounded-full flex items-center justify-center text-white font-bold mb-3">강사</div>
              <h4 className="font-bold text-gray-800 mb-1">담임 강사</h4>
              <p className="text-gray-600 text-sm text-center">세심한 교육 지도</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#11609C] rounded-full flex items-center justify-center text-white font-bold mb-3">AI</div>
              <h4 className="font-bold text-gray-800 mb-1">온라인 AI</h4>
              <p className="text-gray-600 text-sm text-center">가장 정확한 학습진단</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#11609C] rounded-full flex items-center justify-center text-white font-bold mb-3">매니저</div>
              <h4 className="font-bold text-gray-800 mb-1">스터디 매니저</h4>
              <p className="text-gray-600 text-sm text-center">완성 학습 관리</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <div className="flex justify-center gap-3">
            <div className="bg-[#11609C] text-white rounded p-3 w-16 text-center shadow-sm">
              <div className="text-2xl font-bold">{days}</div>
              <div className="text-xs">일</div>
            </div>
            <div className="bg-[#11609C] text-white rounded p-3 w-16 text-center shadow-sm">
              <div className="text-2xl font-bold">{hours}</div>
              <div className="text-xs">시간</div>
            </div>
            <div className="bg-[#11609C] text-white rounded p-3 w-16 text-center shadow-sm">
              <div className="text-2xl font-bold">{minutes}</div>
              <div className="text-xs">분</div>
            </div>
            <div className="bg-[#11609C] text-white rounded p-3 w-16 text-center shadow-sm">
              <div className="text-2xl font-bold">{seconds}</div>
              <div className="text-xs">초</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full text-xs">#15년의 학습노하우</span>
          <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full text-xs">#스킬 중심 훈련</span>
          <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full text-xs">#단계별 로드맵</span>
          <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full text-xs">#검증된 강사진</span>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg w-full mb-10">
          <h3 className="text-[#11609C] text-lg font-bold text-center mb-3">'지금의 영어 학습은 어떤가요?'</h3>
          <p className="text-gray-700 text-center mb-4 text-sm">
            15년의 중대형 경험, 가장 뛰어난 AI학습, 스터디 매니저와의 3중 관리로 다양한 학습 고충을 해결하려 합니다.
          </p>
          <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
            <li>학습 방법에 대한 혼란 [적합한 교재, 방법, 영역별 초점]</li>
            <li>아이의 동기 부여 문제 [흥미 반복학습 거부 목표 설정 밸런스 붕괴]</li>
            <li>학습 성과의 가시성 부족 [단시간 결과 불가능 학원과 가정의 학습 성과 차이 평가 정확성]</li>
            <li>적절한 환경 조성의 어려움 [인풋 노출 부모 영어 실력]</li>
            <li>학습 지속성과 장기 목표 설정의 어려움 [사춘기 단기 장기 로드맵]</li>
          </ul>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="https://pf.kakao.com/_pGxkPn/chat" 
             className="bg-[#FFDD00] text-gray-800 font-semibold px-5 py-2 rounded-md hover:bg-[#FFD100] transition-colors text-sm shadow-sm">
            카카오톡 상담하기
          </a>
          <a href="https://blog.naver.com/ourdebut" 
             className="bg-[#FFDD00] text-gray-800 font-semibold px-5 py-2 rounded-md hover:bg-[#FFD100] transition-colors text-sm shadow-sm">
            블로그 방문하기
          </a>
          <a href="https://band.us/n/a0aaA1P6G2R8v" 
             className="bg-[#FFDD00] text-gray-800 font-semibold px-5 py-2 rounded-md hover:bg-[#FFD100] transition-colors text-sm shadow-sm">
            밴드 가입하기
          </a>
          <a href="https://map.naver.com/p/entry/place/1531784280?c=15.00,0,0,0,dh" 
             className="bg-[#FFDD00] text-gray-800 font-semibold px-5 py-2 rounded-md hover:bg-[#FFD100] transition-colors text-sm shadow-sm">
            위치 보기
          </a>
        </div>
        
        <div className="text-center text-gray-500 text-xs">
          <p>학원 등록 번호: 6382호 | 사업자 정보: 524-95-01777</p>
          <p>주소: 서울특별시 양천구 신목로 38 202호 (08015) | 전화번호: 02-6952-1131</p>
        </div>
      </div>
      
      {/* SEO 키워드: 신목초, 목동초, 목일중, 목동중 */}
      <div className="sr-only">
        신목초, 목동초, 목일중, 목동중
      </div>
    </div>
  );
} 