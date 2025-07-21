"use client"
import ClubIcon from "@/components/icons/club";
import InfoOutlineIcon from "@/components/icons/info-outlined";
import { useState } from "react";

export default function ClubPointsAnnounce({ points }: { points: string }) {
    const [hover, setHover] = useState(false);

    return (
        <>
            <ClubIcon className="w-5 h-5" />
            <p className="text-xs text-neutral-400">{points}  امتیاز دیجی‌کلاب</p>
            <InfoOutlineIcon
                className="h-4 w-4 text-neutral-500 cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />

            {hover &&
                <p
                    className="min-w-[20vw] max-w-[50vh] h-fit bg-[#3f4064] text-white text-sm  rounded-sm p-2 absolute top-10  z-10 text-center">
                    بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به ماکوریتهای کلابی سر بزنید
                </p>
            }

        </>
    )
}