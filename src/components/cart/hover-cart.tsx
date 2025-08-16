"use client"

import Price from "../products/product-card/Price";
import HoverCartProductCard from "./hover-cart-pcard";
import { useContext } from "react";
import CartContext from "@/context/cart/action-state";
import { Item } from "@/context/cart/action-state";


export default function HoverCart({ items }: { items: number }) {
    const { state } = useContext(CartContext);


    // const [products, setProducts] = useState<IProduct[] | null>(null);
    // const [hasFetched, setHasFetched] = useState(false);


    // useEffect(() => {
    //     if (productIds.length > 0 && !hasFetched) {

    //         const fetcAll = async () => {
    //             const result: IProduct[] = [];

    //             for (let id of productIds) {
    //                 const res = await fetch(`http://localhost:5000/products?id=${id}`, { cache: "no-store" })
    //                 const data: IProduct[] = await res.json();
    //                 if (data[0]) {
    //                     result.push(data[0]);
    //                 }
    //             }
    //             setProducts(result);
    //             setHasFetched(true);
    //         }

    //         fetcAll();
    //     }
    // }, [hasFetched, JSON.stringify(productIds)]);


    return (
        <div className=" flex flex-col w-full h-full text-neutral-500">
            <div>{items} کالا</div>
            <div className="w-full h-[70%] flex flex-col items-center mt-2 overflow-auto" >
                {state.length > 0 && state?.map((cartItem: Item) => {
                    return (
                        <HoverCartProductCard cartItem={cartItem} key={cartItem.id} />
                    )
                })}
                {state.length == 0 &&
                    <p className="text-neutral-500 text-center">محصولی در سبد خریدتان نیست</p>
                }

            </div>

            <div className="flex w-full h-[20%] justify-between items-center py-1 px-4 mt-2">
                <div className="flex flex-col justify-between items center">
                    <span className="text-neutral-600 ">مبلغ قابل پرداخت</span>
                    <Price discountedPrice={112000000} iconClassName="h-5 w-5" textClass="text-lg text-neutral-900" />
                </div>

                <div className={`w-fit bg-[#ff1f40] text-white text-sm text-center px-4 py-3 rounded-lg ${items > 0 ? "cursor-pointer" : "opacity-50 cursor-default"} `}>ثبت سفارش</div>
            </div>
        </div>
    )
}