import MyCalendar from "@/components/MyCalendar";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Calendar"
}


export default function Calendar() {
    return (
       <MyCalendar/>
    );
}