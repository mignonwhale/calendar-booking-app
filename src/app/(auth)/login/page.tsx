'use client'

import Link from "next/link";
import React, {useState} from "react";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailExpanded, setIsEmailExpanded] = useState(false)
    const [isPwExpanded, setIsPwExpanded] = useState(false)
    const [error, setError] = useState("");

    const handleEmailToggle = () => {
        setIsEmailExpanded((isEmailExpanded) => !isEmailExpanded);
    };
    const handlePwToggle = () => {
        setIsPwExpanded((isPwExpanded) => !isPwExpanded);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        // TODO 인증 확인
        if (email === "" || password === "") {
            setError("이메일과 비밀번호를 입력해주세요.");
            return;
        }

        try {
            // setIsLoading(true);

        } catch (e) {
            console.error("Error creating account:", e);
            // setError(e);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="min-h-screen w-full md:max-w-2xl flex flex-col items-center justify-center ">
                <h1 className="text-2xl md:text-5xl mb-10">다시 오신 걸 환영합니다</h1>
                <form onSubmit={handleSubmit}>
                    <div className="w-full md:w-md flex flex-col items-center justify-center gap-6 text-sm font-medium relative">
                        <div className="relative w-full">
                            {/* 이메일 주소 라벨 - border에 걸치게 표시 */}
                            {isEmailExpanded && (
                                <label
                                    className="absolute -top-2 left-4 px-2 text-sm font-bold text-blue-500 bg-white transition-all duration-300 ease-in-out p-0">
                                    이메일
                                </label>
                            )}
                            <input
                                type="email"
                                placeholder="이메일"
                                value={email}
                                onChange={handleEmailChange}
                                onClick={() => !isEmailExpanded && handleEmailToggle()}
                                onBlur={handleEmailToggle}
                                className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div className="relative w-full">
                            {/* 비밀번호 라벨 - border에 걸치게 표시 */}
                            {isPwExpanded && (
                                <label
                                    className="absolute -top-2 left-4 px-2 text-sm font-bold text-blue-500 bg-white transition-all duration-300 ease-in-out p-0">
                                    비밀번호
                                </label>
                            )}
                            <input
                                type="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={handlePasswordChange}
                                onClick={() => !isPwExpanded && handlePwToggle()}
                                onBlur={handlePwToggle}
                                className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <input type="submit" value={isLoading ? "로그인 중..." : "로그인"}
                            className="w-full px-4 py-3 bg-black  rounded-md text-white" />
                    </div>
                </form>

                {error !== "" ? (<span className="text-red-400">이메일 혹은 비밀번호가 유효하지 않습니다.</span>) : null}

                <div className="mt-10 flex flex-col items-center justify-center ">
                    <span>계정이 없으신가요? <Link href="/create-account" className="text-blue-500 font-bold">회원가입</Link></span>
                    <span>비밀번호를 잊으셨나요? <Link href="/reset-password" className="text-blue-500 font-bold">비밀번호 초기화</Link> </span>
                </div>
            </div>
        </div>
    )
}