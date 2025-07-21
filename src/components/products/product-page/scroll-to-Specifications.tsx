"use client"
import { globalSpecificationsRef } from "./global-refs";
import ArrowLeftIcon from "@/components/icons/arrow-left";

export default function ScrollToSpecifications() {
    const clickHandler = () => {
        globalSpecificationsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="w-full grid grid-cols-3 gap-1 px-2">
            <div className="flex items-center justify-center h-10"><div className="border-b-1 border-neutral-300 h-1 w-full"></div></div>
            <div className=" h-10 flex items-center justify-center text-sm text-neutral-800 border-1 border-neutral-300 rounded-lg cursor-pointer" onClick={clickHandler}><span>مشاهده همه ویژگی ها</span><span><ArrowLeftIcon className="w-5 h-5" /></span></div>
            <div className="flex items-center justify-center h-10"><div className="border-b-1 border-neutral-300 h-1 w-full"></div></div>
        </div>
    )
}