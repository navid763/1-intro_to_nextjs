"use client"
import { useState, useEffect } from "react";
import { Ifilters } from "@/models/filters/filters";


// interface IPriceRangeSlider {
//     minPrice: number | null | undefined;
//     maxPrice: number | null | undefined;
//     filtersHandler: React.Dispatch<React.SetStateAction<Ifilters[]>>
// }

// export default function PriceRangeSlider({ minPrice, maxPrice, filtersHandler }: IPriceRangeSlider) {
//     const validMinPrice = minPrice != null ? minPrice : 0;
//     const validMaxPrice = maxPrice != null ? maxPrice : 10000000;


//     const min = validMinPrice;
//     const max = validMaxPrice;
//     const step = 100000;

//     const [minValue, setMinValue] = useState(validMinPrice);
//     const [maxValue, setMaxValue] = useState(validMaxPrice);
//     const [filterHasChanged, setFilterHasChanged] = useState<boolean>(false)

//     useEffect(() => {
//         setMinValue(validMinPrice);
//         setMaxValue(validMaxPrice);
//     }, [validMinPrice, validMaxPrice]);

//     const updateOrAddFilter = (prevFilters: Ifilters[], newFilter: Ifilters): Ifilters[] => {
//         const filterIndex = prevFilters.findIndex(f => f.filter === newFilter.filter);

//         if (filterIndex > -1) {
//             const updatedFilters = [...prevFilters];
//             updatedFilters[filterIndex] = newFilter;
//             return updatedFilters
//         } else {
//             return [...prevFilters, newFilter];
//         }
//     }



//     const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = Math.min(Number(e.target.value), maxValue - step);

//         setMinValue(value);

//         const newMinFilter: Ifilters = { filter: "minPrice", value: String(value) }
//         filtersHandler(prev => {
//             return updateOrAddFilter(prev, newMinFilter)
//         })
//     };

//     const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = Math.max(Number(e.target.value), minValue + step);

//         setMaxValue(value);

//         const newMaxFilter: Ifilters = { filter: "maxPrice", value: String(value) }
//         filtersHandler(prev => {
//             return updateOrAddFilter(prev, newMaxFilter)
//         })
//     };

//     useEffect(() => {
//         if (minValue !== validMinPrice || maxValue !== validMaxPrice) {
//             setFilterHasChanged(true);
//         } else {
//             setFilterHasChanged(false);
//         }
//     }, [minValue, maxValue, validMinPrice, validMaxPrice]);

//     const minPercent = ((minValue - min) / (max - min)) * 100;
//     const maxPercent = ((maxValue - min) / (max - min)) * 100;

//     return (
//         <div className="w-full px-4 py-6 ">
//             {/* <div className="text-neutral-600 px-4">فیلتر قیمت (تومان)</div> */}
//             <div className="flex gap-2 items-center text-neutral-600 px-4"><span>فیلتر قیمت (تومان)</span>{filterHasChanged && <div className="h-1 w-1 bg-blue-600 rounded"></div>}</div>


//             <div className="relative h-10 mt-6  ">
//                 {/* خط زمینه */}
//                 <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-neutral-300 rounded" />

//                 {/* خط محدوده انتخاب‌شده */}
//                 <div
//                     className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 rounded"
//                     style={{
//                         left: `${(minValue / max) * 100}%`,
//                         width: `${((maxValue - minValue) / max) * 100}%`
//                     }}
//                 />

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={minValue}
//                     onChange={handleMinChange}
//                     className="absolute mt-4 w-full appearance-none z-10 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
//                     style={{ direction: "ltr" }}

//                 />

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={maxValue}
//                     onChange={handleMaxChange}
//                     className="absolute mt-4 w-full appearance-none z-10 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
//                     style={{ direction: "ltr" }}

//                 />
//             </div>

//             <div className="flex justify-between text-sm text-neutral-500 mt-6 border-b border-gray-300 pb-6">
//                 <span>{maxValue.toLocaleString()} تومان</span>
//                 <span>تا</span>
//                 <span>{minValue.toLocaleString()} تومان</span>
//             </div>
//         </div>
//     );
// }




interface IPriceRangeSlider {
    minPrice: number | null | undefined;
    maxPrice: number | null | undefined;
    filtersHandler: React.Dispatch<React.SetStateAction<Ifilters[]>>
}

export default function PriceRangeSlider({ minPrice, maxPrice, filtersHandler }: IPriceRangeSlider) {
    // Fix: Use fallback values that make sense
    const validMinPrice = minPrice != null ? minPrice : 0;
    const validMaxPrice = maxPrice != null ? maxPrice : 10000000;

    const min = validMinPrice;
    const max = validMaxPrice;
    const step = 100000;

    const [minValue, setMinValue] = useState(validMinPrice);
    const [maxValue, setMaxValue] = useState(validMaxPrice);
    const [filterHasChanged, setFilterHasChanged] = useState<boolean>(false);

    useEffect(() => {
        setMinValue(validMinPrice);
        setMaxValue(validMaxPrice);
    }, [validMinPrice, validMaxPrice]);

    const updateOrAddFilter = (prevFilters: Ifilters[], newFilter: Ifilters): Ifilters[] => {
        const filterIndex = prevFilters.findIndex(f => f.filter === newFilter.filter);

        if (filterIndex > -1) {
            const updatedFilters = [...prevFilters];
            updatedFilters[filterIndex] = newFilter;
            return updatedFilters;
        } else {
            return [...prevFilters, newFilter];
        }
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - step);
        setMinValue(value);

        const newMinFilter: Ifilters = { filter: "minPrice", value: String(value) };
        filtersHandler(prev => {
            return updateOrAddFilter(prev, newMinFilter);
        });
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + step);
        setMaxValue(value);

        const newMaxFilter: Ifilters = { filter: "maxPrice", value: String(value) };
        filtersHandler(prev => {
            return updateOrAddFilter(prev, newMaxFilter);
        });
    };

    useEffect(() => {
        if (minValue !== validMinPrice || maxValue !== validMaxPrice) {
            setFilterHasChanged(true);
        } else {
            setFilterHasChanged(false);
        }
    }, [minValue, maxValue, validMinPrice, validMaxPrice]);

    // Calculate percentages for positioning
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="w-full px-4 py-6" >
            <div className="flex gap-2 items-center text-neutral-600 px-4">
                <span>فیلتر قیمت (تومان)</span>
                {filterHasChanged && <div className="h-1 w-1 bg-blue-600 rounded"></div>}
            </div>

            <div className="relative h-6 mt-6 mb-4">
                {/* Background track */}
                <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-neutral-300 rounded" />

                {/* Active range */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 rounded"
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`
                    }}
                />

                {/* Min range input */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute top-0 w-full h-6 bg-transparent appearance-none cursor-pointer z-20"
                    style={{
                        background: 'transparent',
                        pointerEvents: 'all'
                    }}
                />

                {/* Max range input */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute top-0 w-full h-6 bg-transparent appearance-none cursor-pointer z-10"
                    style={{
                        background: 'transparent',
                        pointerEvents: 'all'
                    }}
                />
            </div>

            <div className="flex justify-between text-sm text-neutral-500 mt-6 border-b border-gray-300 pb-6">
                <span>{maxValue.toLocaleString()} تومان</span>
                <span>تا</span>
                <span>{minValue.toLocaleString()} تومان</span>
            </div>

            <style jsx>{`
                input[type="range"] {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                    cursor: pointer;
                }

                input[type="range"]::-webkit-slider-track {
                    background: transparent;
                    height: 4px;
                }

                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    background: #3b82f6;
                    cursor: pointer;
                    border: 2px solid #ffffff;
                    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
                }

                input[type="range"]::-moz-range-thumb {
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    background: #3b82f6;
                    cursor: pointer;
                    border: 2px solid #ffffff;
                    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
                }

                input[type="range"]::-moz-range-track {
                    background: transparent;
                    height: 4px;
                }
            `}</style>
        </div>
    );
}