import type {Metadata} from "next";
import {MyCalendar} from "@/components/MyCalendar";

export const metadata: Metadata = {
    title: "Calendar"
}


export default function Calendar() {
    return (
       <MyCalendar/>
    );
}