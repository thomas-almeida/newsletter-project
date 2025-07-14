"use client"

import Image from "next/image";
import WeekDays from "./weekDays";

import { usePathname } from "next/navigation";

const weekNames = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

const today = new Date()
const weekDayName = weekNames[today.getDay()]
const day = today.getDate()
const month = today.toLocaleString("pt-BR", { month: "short" })
const year = today.getFullYear()

export default function TopBar() {

  const pathname = usePathname()

  return (
    <div className="p-6 shadow-xl rounded-b-4xl w-full">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <Image
            alt="profile"
            src={"https://chimp.lon1.cdn.digitaloceanspaces.com/assets/chimpers/pfp-bounce-pixel/2011.gif"}
            width={60}
            height={60}
            className="border-2 border-slate-900 rounded-full"
          />
          <span>
            <h3 className="text-xl font-bold text-[#3C3C3C]">Thomas</h3>
            <h4 className="text-sm font-bold italic text-[#848484]">FrontEnd</h4>
          </span>
        </div>
        <div className="text-right">
          <h3 className="text-lg font-bold text-[#3C3C3C]">{weekDayName}</h3>
          <h4 className="text-xs font-bold italic text-[#494949] capitalize">{day} {month} {year}</h4>
        </div>
      </div>
      <div className={pathname !== "/" ? `hidden` : undefined}>
        <WeekDays daysAmount={5} />
      </div>
    </div>
  )
}