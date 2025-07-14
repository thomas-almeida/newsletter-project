"use client"

import Link from "next/link";
import { FiMail, FiSettings } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function Navigation() {

  const pathname = usePathname()

  return (
    <>
      <div className="grid grid-cols-3 items-center w-full p-4 absolute bottom-0 border-t">

        <Link href="/">
          <RiHomeLine
            className={`${pathname === "/" ? "text-black" : ""} text-[#747474] text-center w-full`}
            size={42}
          />
        </Link>
        <Link href={"/week"}>
          <FiMail
            className={`${pathname === "/week" ? "text-black" : ""} text-[#747474] text-center w-full`}
            size={42}
          />
        </Link>
        <Link href={"/settings"}>
          <FiSettings
            className={`${pathname === "/settings" ? "text-black" : ""} text-[#747474] text-center w-full`}
            size={42}
          />
        </Link>
      </div>
    </>
  )
}