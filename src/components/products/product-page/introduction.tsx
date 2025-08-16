"use client"
import ArrowLeftIcon from "@/components/icons/arrow-left";
import { useState } from "react";

export default function Introduction({ context }: { context: string }) {
    const text = context;
    const [showMore, setShowMore] = useState(false);
    const previewText = text.split(" ").slice(0, 90).join(" ");

    return (
        <>
            <div className="w-fit flex flex-col justify-between">
                <span className="text-lg p-1">معرفی</span>
                <div className="w-full h-0.5 bg-red-500 rounded-md"></div>
            </div>
            {!showMore &&
                <>
                    <p className="text-base text-gray-900 mt-4 p-2">
                        {previewText + "..."}
                    </p>
                    <div className="flex gap-0.5 text-base text-blue-500 items-center mr-4 cursor-pointer" onClick={() => setShowMore(true)}>
                        <span>بیشتر</span>
                        <ArrowLeftIcon className="w-4 h-4" />
                    </div>
                </>
            }

            {showMore &&
                <>
                    <p className="text-base text-gray-900 mt-4 p-2">
                        {text}
                    </p>
                    <div className="flex gap-0.5 text-base text-blue-500 items-center mr-4 cursor-pointer" onClick={() => setShowMore(false)}>
                        <span>بستن</span>
                        <ArrowLeftIcon className="w-4 h-4" />
                    </div>
                </>

            }

        </>
    )
}