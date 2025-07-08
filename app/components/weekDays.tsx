"use client"

import Day from "./day"
import { useState } from "react"

type WeekDaysProps = {
  daysAmount: number,
}

const oneWeek = [
  'SEG',
  'TER',
  'QUA',
  'QUI',
  'SEX',
]

const todayWeekDay = new Date().getDay()

export default function WeekDays({ daysAmount }: WeekDaysProps) {

  const [selectedDay, setSelectedDay] = useState<number | null>(todayWeekDay);

  function selectDay(currentDay: number, today: number) {
    if (today >= currentDay) {
      setSelectedDay(currentDay)
    }
  }

  return (
    <div
      className="grid justify-center it#f1f1f1ems-center gap-2 pt-8"
      style={{ gridTemplateColumns: `repeat(${daysAmount}, 1fr)` }}
    >
      {
        oneWeek.map((day, index) => (
          <Day
            key={index}
            day={day}
            dayNotPassed={todayWeekDay >= index}
            focused={selectedDay === index}
            onClick={() => selectDay(index, todayWeekDay)}
          />
        ))
      }
    </div>
  )
}