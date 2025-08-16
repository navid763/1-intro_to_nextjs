"use client"
import HoverCartProductCard from "@/components/cart/hover-cart-pcard";
import { useContext } from "react";
import CartContext from "@/context/cart/action-state";
import { Item } from "@/context/cart/action-state";
import Bill from "@/components/cart/bill";
import Loader from "@/components/loader/loader";

export default function Cart() {

    const { state, isHydrated } = useContext(CartContext);

    // if (!isHydrated) {
    //     return <div className="w-[50%] h-20"><Loader /></div>
    // }


    return (
        <div className="main-container flex flex-col items-center w-full p-4" dir="rtl">
            <div className="flex flex-col items-center w-full ">
                <div className=" flex w-[95%] items-start border-b border-neutral-200 p-2">
                    <div className="w-fit flex items-center gap-2" >
                        <span className="text-red-500 text-lg">سبد خرید</span>
                        {state.length > 0 &&
                            <div className=" flex justify-center items-center text-sm h-3 w-3 p-2.5 bg-[#ff1f40] text-white text-center rounded">{state.length}</div>
                        }
                    </div>
                </div>

                <div className="flex w-[95%] gap-1 mt-4 relative">

                    <div className="flex flex-col w-[75%] px-2">
                        {!isHydrated &&
                            <div className="w-full self-center"><Loader /></div>
                        }

                        {state.length > 0 && state?.map((cartItem: Item) => {
                            return (
                                <HoverCartProductCard cartItem={cartItem} key={cartItem.id} />
                            )
                        })}
                        {state.length == 0 &&
                            <p className="text-neutral-400 font-bold text-center mt-[8vh]">محصولی در سبد خریدتان نیست</p>
                        }

                    </div>

                    <div className="flex flex-col w-[25%] h-fit rounded-lg sticky inset-0 top-5 z-20">

                        <div className="flex flex-col w-full h-fit border border-neutral-200 rounded-lg px-4 pb-4">

                            <Bill />

                            <div className={`w-[75%] self-center text-white text-center px-4 py-3 rounded-lg cursor-pointer mt-6 bg-[#ef4056] ${state.length == 0 ? "opacity-50" : ""} `}>تایید و تکمیل سفارش</div>

                        </div>
                        <div className="w-full text-sm text-neutral-400 px-1 mt-2">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند</div>


                    </div>

                </div>

            </div>
        </div>
    )
}