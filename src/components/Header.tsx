'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() { 
  const path = usePathname();
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-20 md:h-24">
        {/* 왼쪽 (로고 자리 확보용) */}
        <div className="w-1/3 md:w-auto"></div>

        {/* 가운데 제목 */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl md:text-3xl font-bold text-blue-600 whitespace-nowrap leading-none">
          예약 프로그램
        </h1>

        {/* 오른쪽 메뉴 */}
        <nav className="w-1/3 md:w-auto flex justify-end pr-2 md:pr-6">
          {path === "/" ? null : (<Link href="/" className="text-sm md:text-base hover:text-blue-600 transition">홈</Link>)}
          {path === "/login" ? null : <Link href="/login" className="text-sm md:text-base hover:text-blue-600 transition">로그인</Link>}
        </nav>
      </div>
    </header>
  )
}