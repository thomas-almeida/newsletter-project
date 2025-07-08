type DayProps = {
  day: string,
  focused: boolean,
  dayNotPassed: boolean,
  onClick: () => void,
}

export default function Day({ day, focused, onClick, dayNotPassed }: DayProps) {
  return (
    <span
      className={`p-4 border border-slate-150 text-center ${!dayNotPassed && 'bg-[#f1f1f1] border-[#f1f1f1]'} text-[#747474] rounded-sm shadow font-semibold italic`}
      onClick={onClick}
      style={
        focused
          ? {
            borderColor: "black",
            color: "black"
          }
          : undefined
      }
    >
      {day}
    </span>
  )
}