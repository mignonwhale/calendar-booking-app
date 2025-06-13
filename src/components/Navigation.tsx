'use client'

import {usePathname} from 'next/navigation';
import Link from "next/link";
import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";

export default function Navigation() {
    const path = usePathname();
    const [sitename/*, setSitename*/] = useState("관리자가 정한 사이트명") ; // TODO profiles.sitename
    const [login, setlogin] = useState(false);

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN') {
                setlogin(true)
                console.log('로그인 완료!!!!', session?.user);
            } else {
                setlogin(false)
                console.log('로그아웃 완료!!!!', event);
            }
        });

    }, [login])


    return (
        <header className="sticky top-0 z-50 p-4 flex justify-center items-center text-sm md:text-xl bg-amber-50">
            <div className="w-full md:w-5xl flex justify-center items-center">
                {/* PC만 노출 */}
                <div className="hidden md:block">
                    <h1>{sitename} |</h1>
                </div>
                <nav className="  flex-2/3 flex justify-between items-center text-sm px-4">
                    <div className=" flex gap-3 md:text-sm">
                        {path === "/"
                            ? null
                            : <Link href="/" className="text-sm md:text-base hover:text-blue-600 transition">홈</Link>}
                        {path === "/calendar"
                            ? null
                            : <Link href="/" className="text-sm md:text-base hover:text-blue-600 transition">스케줄</Link>}
                    </div>
                    {!login ?( <div>
                        {path === "/login"
                            ? null
                            : <Link href="/login" className="text-sm md:text-base hover:text-blue-600 transition">로그인</Link>}
                    </div>) : (
                        <div>
                            {path === "/logout"
                                ? null
                                : <Link href="/logout" className="text-sm md:text-base hover:text-blue-600 transition">로그아웃</Link>}
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}