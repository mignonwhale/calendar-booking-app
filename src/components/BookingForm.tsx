import {useCallback, useState} from "react";

export default function BookingForm({onClose}: { onClose: () => void }) {
    const [editForm, setEditForm] = useState({title: "", start: "", end: ""});
    // 폼 입력 변경 핸들러
    const handleEditChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            // TODO supabase에 저장하는 로직 추가
            const {name, value} = e.target
            setEditForm((prev) => ({...prev, [name]: value}))
        },
        []
    )

    // 편집 저장
    const saveEdit = useCallback(() => {
        // if (!selectedEvent) return
        // const updatedEvent = {
        //     ...selectedEvent,
        //     title: editForm.title,
        //     start: new Date(editForm.start),
        //     end: new Date(editForm.end),
        // }
        // setEvents((prev) =>
        //     prev.map((e) => (e === selectedEvent ? updatedEvent : e))
        // )
        // setIsEditing(false)
        // // Supabase 연동 예시:
        // // const { error } = await supabase.from("events").update(updatedEvent).eq("id", selectedEvent.id)
    }, [editForm])

    return (
            <div className="space-y-3 sm:space-y-4">
                <div>
                    <label className="block text-sm sm:text-base md:text-lg mb-1">예약자</label>
                    <input type="text" value={editForm.title} onChange={handleEditChange}
                           className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"/>
                </div>
                <div>
                    <label className="block text-sm sm:text-base md:text-lg mb-1">예약시작시간</label>
                    <input type="text" value={editForm.start} onChange={handleEditChange}
                           className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"/>
                </div>
                <div>
                    <label className="block text-sm sm:text-base md:text-lg mb-1">예종료시간</label>
                    <input type="text" value={editForm.end} onChange={handleEditChange}
                           className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"/>
                </div>
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">

                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-300 rounded text-sm sm:text-base hover:bg-gray-400 transition">
                        취소
                    </button>
                    <button onClick={saveEdit}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white rounded text-sm sm:text-base hover:bg-red-600 transition">저장
                    </button>

                </div>
            </div>
    )
}