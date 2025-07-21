"use client"
import { useState } from "react";
import TicIcon from "@/components/icons/tic";

interface IColorCircleProps {
    title: string
    hex: string
    selected: boolean
}

export default function ColorCircle({ title, hex, selected }: IColorCircleProps) {
    const [hover, setHover] = useState(false);
    const selectedStyle = selected ? "solid 3px #61b0ff" : "solid 1px #b5b5b5";
    return (
        <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="w-9 h-9 flex justify-center items-center cursor-pointer rounded-[50%]" style={{ border: selectedStyle }}>
                <div className="w-6 h-6 rounded-full flex justify-center items-center" style={{ backgroundColor: hex }} >
                    {selected && <TicIcon className="w-6 h-6 text-neutral-600" />}
                </div>
            </div>

            {hover && <span className="bg-[#3f4064] text-white text-sm w-12 h-8 p-1 rounded-lg flex justify-center items-center absolute z-10 top-12 left-1/2 transform -translate-x-1/2">{title}</span>}
        </div>
    )
};

