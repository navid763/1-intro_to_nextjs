"use client"

import CartIcon from "../icons/Cart";
import { useState } from "react";
import HoverCart from "../cart/hover-cart";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import CartContext from "@/context/cart/action-state";

export default function CartOnHeader() {
    const { state } = useContext(CartContext);
    const items = state.length;

    const [isHover, setIsHover] = useState(false);

    const pathName = usePathname();
    const currentPage = pathName.replace(/^\/+/, '');

    return (
        <div className="relative" dir="rtl">
            <Link href={"http://localhost:3000/cart"} >

                <div
                    className="flex justify-center relative cursor-pointer"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CartIcon className="h-7 w-7 text-neutral-700" />
                    {items > 0 &&
                        <div className="w-3 h-3 bg-[#ff1f40] text-white text-xs p-2 flex justify-center items-center rounded-sm absolute left-4 bottom-0 ">{items}</div>
                    }
                </div>

            </Link>


            {isHover && currentPage != "cart" &&
                <div className=" h-[90vh] w-[35vw] bg-white shadow-lg absolute top-5 left-0 z-50 p-4" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <HoverCart items={items} />
                </div>

            }

        </div>
    )
}