"use client";

import {useEffect} from "react";
import {supabase} from "@/lib/supabase";
export default function Logout() {
    const logout = async () => {
        let {error} = await supabase.auth.signOut()
        if (error) {
            console.error("로그아웃 실패:", error.message);
        } else {
            console.log("로그아웃 성공");
        }
    }
    useEffect(() => {
        logout();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">로그아웃 중...</h1>
            <p>잠시만 기다려 주세요.</p>
        </div>
    );
}
