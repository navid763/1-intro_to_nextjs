"use client"
import { useState } from "react";
import { IProductColors } from "../product-card/color-options";
import ColorCircle from "./color-circle";
import { Span } from "next/dist/trace";

export default function ColorSelecting({ colors }: IProductColors) {
    const [selectedColor, setSelectedColor] = useState(colors[0].title); // by default the first color has been selected



    return (
        <>
            <div><span>رنگ:</span> <span className="text-neutral-600">{selectedColor ? selectedColor : <span className="text-sm text-red-300">رنگی برای محصول انتخاب کنید</span>}</span></div>
            <div className="grid grid-cols-10 gap-2 p-2">
                {colors.map(c => {
                    return (
                        <div key={c.hex} onClick={() => setSelectedColor(prev => prev === c.title ? "" : c.title)}>
                            <ColorCircle hex={c.hex} title={c.title} selected={c.title === selectedColor} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}