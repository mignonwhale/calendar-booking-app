'use client';
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";
import {useEffect, useState} from "react";

export default function EmailVerification() {
    const router = useRouter();
    const [message, setMessage] = useState('로그인 처리 중...');

    useEffect(() => {
        const handleMagicLink = async () => {
            const { error } = await supabase.auth.getSession(); // 세션 자동 복원 확인

            if (error) {
                setMessage(`로그인 실패: ${error.message}`);
            } else {
                setMessage('로그인 성공! 리디렉션 중...');
                router.replace('/calendar'); // 로그인 후 이동할 페이지
            }
        };

        handleMagicLink();
    }, [router, supabase]);

    return <p>{message}</p>;
}