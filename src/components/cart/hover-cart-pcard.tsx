"use client"

import Image from "next/image";
import QuantityButton from "./quantity-handler-button";
import Price from "../products/product-card/Price";
import ToomanIcon from "../icons/Tooman";
import GuaranteeIcon from "../icons/guarantee";
import { IProduct } from "@/models/product-props";
import { Warranty } from "@/models/product-props";
import { useEffect, useState } from "react";
import { Item } from "@/context/cart/action-state";


export default function HoverCartProductCard({ cartItem }: { cartItem: Item }) {
    let f = cartItem
    const [product, setProduct] = useState<IProduct | null>(null);
    const [hasFetched, setHasFetched] = useState(false);
    const [warranty, setWarranty] = useState<Warranty | null>(null)
    useEffect(() => {
        if (!hasFetched) {
            fetch(`http://localhost:5000/products?id=${cartItem.productId}`, { cache: "no-store" })
                .then(res => res.json())
                .then((data: IProduct[]) => {
                    const singleProduct = data[0]
                    setProduct(singleProduct);

                    if (singleProduct?.warrantyId) {
                        fetch(`http://localhost:5000/warranties?id=${singleProduct?.warrantyId}`, { cache: "no-store" })
                            .then(res => res.json())
                            .then((data: Warranty[]) => {
                                setWarranty(data[0]);

                            });
                    }
                });

            setHasFetched(true)
        }
    }, [hasFetched]);


    return (

        <div className="pr-card flex flex-col w-full border-b border-neutral-200 pb-4 mt-2">
            <div className="flex w-full items-start">
                <div className="flex flex-col w-[35%] items-center gap-1">
                    {product?.images[0] &&
                        <Image src={product?.images[0]} width={120} height={180} alt={product.slug || " "} />
                    }
                    <div className="p-1 text-red-600 font-bold mt-1 ">فروش ویژه</div>
                </div>

                <div className="flex flex-col w-[65%] items-center mr-4 gap-2">
                    <div className="text-neutral-900 text-lg"><p>{product?.titleFa}</p></div>
                    <div className="flex justify-start items-center gap-2 self-start text-neutral-600">
                        <div className="w-4 h-4 rounded-[50%]" style={{ backgroundColor: cartItem.color?.hex }}></div>
                        <div>{cartItem.color?.title}</div>
                    </div>

                    <div className="flex self-start items-center  text-neutral-600 gap-4 mt-1">
                        <div className="w-[8%] "><GuaranteeIcon className="w-5 h-5" /></div>
                        <div className="w-[90%] text-sm"><p>{warranty?.title}</p></div>
                    </div>


                </div>

            </div>

            <div className="flex w-full items-center mt-4">
                <div className="w-[35%] flex justify-center">
                    <QuantityButton cartItem={cartItem} maxProducts={4} parentClassName="flex w-fit justify-center items-center text-red-500 text-lg shadow px-3 py-1 gap-2 border border-neutral-200 rounded-lg" />
                </div>
                <div className="w-[65%] flex flex-col items-start justify-center gap-1 text-neutral-900 mr-2">
                    {product?.pricing?.originalPrice !== product?.pricing?.discountedPrice &&
                        <div className="flex items-center justify-center text-red-500 text-xs gap-0.5">{(((product?.pricing?.originalPrice ?? 0) - (product?.pricing?.discountedPrice ?? 0)) * cartItem.count).toLocaleString()} <ToomanIcon className="h-4 w-4" /> <span>تخفیف</span></div>
                    }
                    <Price discountedPrice={product?.pricing?.discountedPrice} quantity={cartItem.count} textClass="font-bold" />
                </div>
            </div>

        </div>
    )
} 