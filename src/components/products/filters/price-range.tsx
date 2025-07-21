"use client"
import { useState, useEffect } from "react";

interface IPriceRangeSlider {
    minPrice: number
    maxPrice: number
}

export default function PriceRangeSlider({ minPrice, maxPrice }: IPriceRangeSlider) {
    const min = minPrice;
    const max = maxPrice;
    const step = 100000;

    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const [filterHasChanged, setFilterHasChanged] = useState<boolean>(false)

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - step);
        setMinValue(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + step);
        setMaxValue(value);
    };

    useEffect(() => {
        if (minValue !== minPrice || maxValue !== maxPrice) {
            setFilterHasChanged(true);
        }
        if (minValue === minPrice && maxValue === maxPrice) {
            setFilterHasChanged(false);
        }
    }, [minValue, maxValue]);

    return (
        <div className="w-full px-4 py-6 ">
            {/* <div className="text-neutral-600 px-4">فیلتر قیمت (تومان)</div> */}
            <div className="flex gap-2 items-center text-neutral-600 px-4"><span>فیلتر قیمت (تومان)</span>{filterHasChanged && <div className="h-1 w-1 bg-blue-600 rounded"></div>}</div>


            <div className="relative h-10 mt-6  ">
                {/* خط زمینه */}
                <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-neutral-300 rounded" />

                {/* خط محدوده انتخاب‌شده */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 rounded"
                    style={{
                        left: `${(minValue / max) * 100}%`,
                        width: `${((maxValue - minValue) / max) * 100}%`
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute mt-4 w-full pointer-events-none appearance-none z-10 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                    style={{ direction: "ltr" }}

                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute mt-4 w-full pointer-events-none appearance-none z-10 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                    style={{ direction: "ltr" }}

                />
            </div>

            <div className="flex justify-between text-sm text-neutral-500 mt-6 border-b border-gray-300 pb-6">
                <span>{maxValue.toLocaleString()} تومان</span>
                <span>تا</span>
                <span>{minValue.toLocaleString()} تومان</span>
            </div>
        </div>
    );
}
