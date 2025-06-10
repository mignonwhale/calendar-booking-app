import moment from "moment/moment";

export default function BookingView({title, start, end, onClose} : {title: string, start: Date, end?: Date, onClose: () => void}) {

const toggleEditMode = () => {
    console.log("편집 모드 토글")
}
  return (
      <>
          <p className="text-sm sm:text-base md:text-lg mb-2">
              <strong>예약자: </strong> {title}
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-2">
              <strong>예약시간시작:</strong> {moment(start).format("YYYY-MM-DD HH:mm")}
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              <strong>예약시간종료:</strong> {moment(end).format("YYYY-MM-DD HH:mm")}
          </p>
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                  onClick={onClose}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-300 rounded text-sm sm:text-base hover:bg-gray-400 transition">
                  닫기
              </button>
              <button
                  onClick={() => {
                      // setEvents((prev) => prev.filter((e) => e !== selectedEvent))
                      onClose()
                  }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white rounded text-sm sm:text-base hover:bg-red-600 transition">
                  삭제
              </button>
              <button
                  onClick={toggleEditMode}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded text-sm sm:text-base hover:bg-blue-600 transition">
                  편집
              </button>
          </div>
      </>
  )
}