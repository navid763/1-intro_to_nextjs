"use client"
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import TrashIcon from "@/components/icons/trash";
import { useContext } from "react";
import CartContext from "@/context/cart/action-state";
import { useSelectedColor } from "@/context/selected-color/selected-color";

export default function AddToCart({ maxProducts, prodId }: { maxProducts: number; prodId: number }) {
    const [count, setCount] = useState(0);

    const { state, dispatch } = useContext(CartContext);
    const { selectedCol } = useSelectedColor();

    const id = useMemo(() => `${prodId}-${selectedCol?.hex}`, [prodId, selectedCol]);

    useEffect(() => {
        if (!selectedCol) {
            setCount(0);
            return;
        }

        const item = state.find(i => i.id === id);
        if (item) { // if the product with selected color exists in the cart
            setCount(item.count);
        } else {
            setCount(0)
        }
    }, [selectedCol, state, id]);




    const addCartHandler = () => {
        if (selectedCol) {
            setCount(1);
            dispatch({ type: "add", payload: { productId: prodId, count: 1, color: selectedCol } })
        }

    };

    const increment = (max: number) => {
        if (count < max) {
            setCount(count + 1);
            dispatch({ type: "increment", payload: { id: id } });

        }

    };

    const decreament = () => {
        if (count > 0) {
            setCount(count - 1);
            dispatch({ type: "decrement", payload: { id: id } });
        }
    };


    return (
        <>

            {count == 0 &&
                <div className="w-[95%] relative flex flex-col items-center">
                    <div className={`w-full bg-[#ef4056] py-3 text-white text-xs text-center font-bold rounded-md  ${!selectedCol ? "opacity-40 cursor-default " : "cursor-pointer"} `} onClick={addCartHandler}> افزودن به سبد خرید</div>
                    {!selectedCol &&
                        <span className="text-xs text-center text-red-600">رنگی انتخاب نشده است!</span>}
                </div>

            }
            {count > 0 &&
                <>
                    <div className="flex items-center bg-white text-red-500 text-lg shadow px-3 py-2 gap-3 rounded-lg">

                        <span onClick={() => increment(maxProducts)} className={`text-xl  ${count == maxProducts ? "text-red-200 cursor-not-allowed" : "cursor-pointer"}  `}>+</span>
                        <div className="flex flex-col items-center min-w-8"> <span>{count}</span> {count == maxProducts && <span className="text-neutral-400 text-xs">حداکثر</span>} </div>
                        <span onClick={decreament} className="cursor-pointer text-xl">
                            {count == 1 ? <TrashIcon className="h-4 w-4" /> : "-"}
                        </span>

                    </div>


                    <div className="flex flex-col">
                        <span className="text-sm text-neutral-800">در سبد شما</span>
                        <div className="flex text-xs gap-2">
                            مشاهده <Link href="localhost:3000/cart" className="text-blue-600 font-bold" >سبد خرید</Link>
                        </div>
                    </div>
                </>
            }
        </>
    )
}