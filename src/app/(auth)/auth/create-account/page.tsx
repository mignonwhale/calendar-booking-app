'use client'

import React, {useState} from "react";
import Link from "next/link";
import {supabase} from "@/lib/supabase";

export default function CreateAccount() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailExpanded, setIsEmailExpanded] = useState(false)
    const [message, setMessage] = useState("");
    // const [sitename, setsitename] = useState("");
    // const [password, setPassword] = useState("");
    // const [isNameExpanded, setIsNameExpanded] = useState(false)
    // const [isPwExpanded, setIsPwExpanded] = useState(false)


    // const handleNameToggle = () => {
    //     setIsNameExpanded((isNameExpanded) => !isNameExpanded);
    // };
    // const handlePwToggle = () => {
    //     setIsPwExpanded((isPwExpanded) => !isPwExpanded);
    // };

    // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setsitename(e.target.value);
    // }
    // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value);
    // }

    const handleEmailToggle = () => {
        setIsEmailExpanded((isEmailExpanded) => !isEmailExpanded);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    // 계정 생성
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")
        if ( email === "" ) {
            setMessage("이메일을 입력해주세요.");
            return;
        }

        // if ( sitename === "") {
        //     setMessage("사이트명을 입력해주세요.");
        //     return;
        // }
        // if (password === "") {
        //     setError("비밀번호를 입력해주세요.");
        //     return;
        // }

        try {
            const {error} = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: 'https://localhose:3000/auth/email-verification', // 인증 후 리다이렉트할 URL
                }
            })
            if(error === null) {
                setMessage("인증 메일을 보냈습니다. 이메일을 확인해주세요!");

                // const userId = a() => {}
                // const {error: insertError} = await supabase.from('profiles').insert([{id: userId, sitename: sitename}]);
                // if(insertError){
                //     console.error("Error inserting profile:", insertError);
                //     setError(insertError.message);
                //     return;
                // }
            } else {
                setMessage(error?.message);
                return;
            }

        } catch (e) {
            console.error("Error creating account:", e);
            // setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="min-h-screen w-full md:max-w-2xl flex flex-col items-center justify-center ">
                <h1 className="text-2xl md:text-5xl mb-10">환영합니다</h1>
                <form onSubmit={handleSubmit}>
                    <div
                        className="w-full md:w-md flex flex-col items-center justify-center gap-6 text-sm font-medium relative">
                        {/*<div className="relative w-full">*/}
                        {/*    /!* 이름 라벨 - border에 걸치게 표시 *!/*/}
                        {/*    {isNameExpanded && (*/}
                        {/*        <label*/}
                        {/*            className="absolute -top-2 left-4 px-2 text-sm font-bold text-blue-500 bg-white transition-all duration-300 ease-in-out p-0">*/}
                        {/*            사이트명*/}
                        {/*        </label>*/}
                        {/*    )}*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        placeholder="사이트명"*/}
                        {/*        value={sitename}*/}
                        {/*        onChange={handleNameChange}*/}
                        {/*        onClick={() => !isNameExpanded && handleNameToggle()}*/}
                        {/*        onBlur={handleNameToggle}*/}
                        {/*        className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="relative w-full">
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
                        {/*<div className="relative w-full">*/}
                        {/*    {isPwExpanded && (*/}
                        {/*        <label*/}
                        {/*            className="absolute -top-2 left-4 px-2 text-sm font-bold text-blue-500 bg-white transition-all duration-300 ease-in-out p-0">*/}
                        {/*            비밀번호*/}
                        {/*        </label>*/}
                        {/*    )}*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        placeholder="비밀번호"*/}
                        {/*        value={password}*/}
                        {/*        onChange={handlePasswordChange}*/}
                        {/*        onClick={() => !isPwExpanded && handlePwToggle()}*/}
                        {/*        onBlur={handlePwToggle}*/}
                        {/*        className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <input type="submit" value={isLoading ? "로그인 링크 보내는중..." : "로그인 링크 보내기" }
                               className="w-full px-4 py-3 bg-black  rounded-md text-white"/>
                    </div>
                </form>

                {message !== "" ? (<p className="text-red-400 mt-4">{message}</p>) : null}

                <div className="mt-10 flex flex-col items-center justify-center ">
                    <span>계정이 있으신가요? <Link href="/login" className="text-blue-500 font-bold">로그인</Link></span>
                </div>
            </div>
        </div>
    )
}