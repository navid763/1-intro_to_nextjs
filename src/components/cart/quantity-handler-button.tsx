"use client"
import TrashIcon from "../icons/trash";
import { useState, useContext } from "react";
import { Item } from "@/context/cart/action-state";
import CartContext from "@/context/cart/action-state";

export default function QuantityButton({ maxProducts, cartItem, parentClassName = "" }: { maxProducts: number; parentClassName: string; cartItem: Item }) {

    const [count, setCount] = useState(cartItem.count ?? 0);
    const { dispatch } = useContext(CartContext);

    const increment = (max: number) => {
        if (count < max) {
            setCount(count + 1);
            dispatch({ type: "increment", payload: { id: cartItem.id } })
        }

    };

    const decreament = () => {
        if (count > 0) {
            setCount(count - 1);
            dispatch({ type: "decrement", payload: { id: cartItem.id } })
        }
    };

    return (
        <div className={parentClassName}>

            <span onClick={() => increment(maxProducts)} className={`text-xl  ${count == maxProducts ? "text-red-200 cursor-not-allowed" : "cursor-pointer"}  `}>+</span>
            <div className="flex flex-col items-center min-w-8"> <span>{count}</span> {count == maxProducts && <span className="text-neutral-400 text-xs">حداکثر</span>} </div>
            <span onClick={decreament} className="cursor-pointer text-xl">
                {count == 1 ? <TrashIcon className="h-4 w-4" /> : "-"}
            </span>

        </div>
    )
}