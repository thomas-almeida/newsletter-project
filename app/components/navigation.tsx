import { FiMail, FiSettings } from "react-icons/fi";
import { RiHome2Line, RiHomeLine } from "react-icons/ri";


export default function Navigation() {
  return (
    <>
      <div className="grid grid-cols-3 items-center w-full p-4 absolute bottom-0 border-t border-slate-100">
        <RiHomeLine
          className="text-[#747474] text-center w-full"
          size={42}
        />
        <FiMail
          className="text-[#747474] text-center w-full"
          size={42}
        />
        <FiSettings
          className="text-[#747474] text-center w-full"
          size={42}
        />
      </div>
    </>
  )
}