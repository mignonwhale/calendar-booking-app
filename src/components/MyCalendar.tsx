"use client"

import moment from "moment"
import "moment-timezone"
import { useCallback, useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import BookingForm from "@/components/BookingForm";
import BookingView from "@/components/BookingView";

const localizer = momentLocalizer(moment)

const testDate = new Date(2025, 5, 12, 14, 0)
const testDate1 = new Date(2025, 5, 12, 15, 0)
const testDate2 = new Date(2025, 5, 12, 17, 0)

const events = [
  {
    title: `홍길동 ${testDate.getHours()}:${testDate.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 14, 0),
    end: new Date(2025, 5, 12, 15, 0),
  },
  {
    title: `홍길동 ${testDate1.getHours()}:${testDate1.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 15, 0),
    end: new Date(2025, 5, 12, 16, 0),
  },
  {
    title: `홍길동 ${testDate2.getHours()}:${testDate2.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 17, 0),
    end: new Date(2025, 5, 12, 15, 0),
  },
  {
    title: `홍길동 ${testDate1.getHours()}:${testDate1.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 20, 0),
    end: new Date(2025, 5, 12, 21, 0),
  },
  {
    title: `홍길동 ${testDate2.getHours()}:${testDate2.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 22, 0),
    end: new Date(2025, 5, 12, 23, 0),
  },
  {
    title: `홍길동 ${testDate1.getHours()}:${testDate1.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 11, 0),
    end: new Date(2025, 5, 12, 21, 0),
  },
  {
    title: `홍길동 ${testDate2.getHours()}:${testDate2.getMinutes().toString().padStart(2, "0")}`,
    start: new Date(2025, 5, 12, 12, 0),
    end: new Date(2025, 5, 12, 23, 0),
  },
]

interface Event {
  title: string
  start: Date
  end: Date
}




export default function MyCalendar() {
  const [myEvents, setEvents] = useState<Event[]>(events)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isEditing, setIsEditing] = useState(false);


    // 추가
  const handleSelectSlot = useCallback(
    ({ start, end }: { start:Date, end:Date }) => {
      const title = window.prompt("New Event name")
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )

  // 상세
  const handleSelectEvent = useCallback((event: Event) => {
    setSelectedEvent(event) // 선택된 이벤트 상태 업데이트
  }, [])

  // 모달 닫기
  const closeModal = useCallback(() => {
    setSelectedEvent(null)
    
  }, [])




  return (
    <div className="h-[calc(100vh-80px-100px)] md:h-[calc(100vh-96px-100px)] px-2 py-2">
      <Calendar
        views={["month"]}
        events={myEvents}
        localizer={localizer}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        popup
        selectable
      />

      {/* 반응형 커스텀 모달 */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-lg w-full max-w-[90vw] sm:max-w-lg md:max-w-xl p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">예약 상세</h2>
            {isEditing ? (
                <BookingForm onClose={closeModal}  />
            ) : (
                <BookingView title={'test'} start={new Date()} end={new Date()} onClose={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
