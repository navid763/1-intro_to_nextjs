"use client"
import { useState } from "react";
import DeliveryTruckIcon from "@/components/icons/delivery-truck";
import ProductAvailableIcon from "@/components/icons/product-availablity";
import ArrowLeftIcon from "@/components/icons/arrow-left";


ProductAvailableIcon

export default function DeliveryMethod({ method, description }: { method: string; description: string }) {
    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <div className="w-full flex flex-col cursor-pointer" onClick={() => setPopUp(true)}>
                <div className="flex justify-between p-2 w-full">
                    <div className="flex items-center w-[60%] gap-2">
                        <ProductAvailableIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-xs text-neutral-800">روش و هزینه ارسال</span>
                    </div>
                    <ArrowLeftIcon className="w-5 h-5 text-neutral-600" />
                </div>

                <div className="flex items-center gap-2.5 p-2 w-full">
                    <div className="w-[5%]"><div className="w-1 h-1 p-[2px] bg-blue-400 rounded mr-1.5"></div></div>
                    <div className="flex items-center w-[60%] gap-0.5">
                        <DeliveryTruckIcon className="w-4 h-4 text-[#e6123d]" />
                        <span className="text-xs text-neutral-500">{method}</span>
                    </div>
                </div>

            </div>

            {popUp &&
                <div
                    className="w-full h-full bg-[#00000057] fixed inset-0 z-50 flex justify-center items-center"
                    onClick={() => setPopUp(false)}
                >

                    <div
                        className="bg-white flex flex-col w-[35vw] p-4  transform animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full flex justify-between text-lg text-neutral-800">
                            <span className="">روش و هزینه ارسال</span>
                            <span onClick={() => setPopUp(false)} className="cursor-pointer">x</span>
                        </div>

                        <div className="w-full mt-3 flex justify-center"><div className="h-1 border-b-1 border-neutral-300 w-[95%]"></div></div>

                        <div className="flex items-center w-full gap-1 mt-3">
                            <DeliveryTruckIcon className="w-5 h-5 text-[#e6123d]" />
                            <span className=" text-neutral-800">{method}</span>
                        </div>
                        <p className="w-full px-1 py-4 text-sm text-gray-700">{description}</p>

                        <div className="bg-neutral-200 px-2 py-4 rounded-2xl text-center cursor-pointer" onClick={() => setPopUp(false)} >باشه، فهمیدم</div>

                    </div>

                </div>

            }
        </>
    )
}