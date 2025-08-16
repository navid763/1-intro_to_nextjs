import ToomanIcon from "@/components/icons/Tooman";
import { useState, useEffect, useContext } from "react";
import CartContext from "@/context/cart/action-state";
import { IProduct } from "@/models/product-props";
import Loader from "../loader/loader";

interface Iresults {
    fetchedProduct: IProduct;
    count: number
}

interface ItotalPrices {
    totalOriginal: string;
    totalDiscounted: string;
    totalSaved: string;
    totalSavedPercentage: string;
}

export default function Bill() {

    const { state, isHydrated } = useContext(CartContext);

    const [products, setProducts] = useState<Iresults[] | null>(null);
    const [totalPrices, setTotalPrices] = useState<ItotalPrices | null>(null);
    const [loadingProducts, setLoadingProducts] = useState(true);


    const totalProducts = state.reduce((sum, item) => sum + item.count, 0);

    useEffect(() => {
        if (state.length > 0) {

            const fetcAll = async () => {
                const result: Iresults[] = [];

                for (let item of state) {
                    const res = await fetch(`http://localhost:5000/products?id=${item.productId}`, { cache: "no-store" })
                    const data: IProduct[] = await res.json();
                    if (data[0]) {
                        result.push({ fetchedProduct: data[0], count: item.count });
                    }
                }
                setProducts(result);
                setLoadingProducts(false);
            }

            fetcAll();
        } else {
            setProducts([]);
            setLoadingProducts(false);
        }
    }, [state]);


    function getTotalPrice(
        products: Iresults[] | null,
        priceType: keyof IProduct["pricing"] = "originalPrice"
    ): number {
        if (!products?.length) return 0;

        return products.reduce((sum, item) => {
            if (!item?.fetchedProduct?.pricing) return sum;
            const price = Number(item.fetchedProduct.pricing[priceType] ?? 0);
            return sum + price * item.count;
        }, 0)
    };

    useEffect(() => {
        if (!products?.length) {
            setTotalPrices({
                totalOriginal: "0",
                totalDiscounted: "0",
                totalSaved: "0",
                totalSavedPercentage: "0"
            });
            return;
        }
        const [totalOriginal, totalDiscounted] = [
            getTotalPrice(products, "originalPrice"),
            getTotalPrice(products, "discountedPrice")
        ];

        const totalSaved = totalOriginal - totalDiscounted;
        const totalSavedPercentage = totalDiscounted ? ((totalSaved / totalOriginal) * 100).toFixed() : "0";

        const format = (n: number): string => n.toLocaleString();

        setTotalPrices({
            totalOriginal: format(totalOriginal),
            totalDiscounted: format(totalDiscounted),
            totalSaved: format(totalSaved),
            totalSavedPercentage: totalSavedPercentage.toString()
        })
    }, [state, products]);



    if (!isHydrated || loadingProducts) {
        return <Loader />
    }

    return (
        <>
            <div className="flex w-full items-center justify-between text-sm text-neutral-600 mt-4">
                <span>قیمت خرید کالاها ({totalProducts})</span>
                <div className="flex items-center gap-1">{totalPrices?.totalOriginal} <ToomanIcon className="w-4 h-4" /> </div>
            </div>
            <div className="flex w-full items-center justify-between text-sm text-neutral-900 font-bold mt-4">
                <span>جمع سبد خرید</span>
                <div className="flex items-center gap-1">{totalPrices?.totalDiscounted} <ToomanIcon className="w-4 h-4" /> </div>
            </div>
            {totalPrices?.totalSaved != "0" &&
                <div className="flex w-full items-center justify-between text-sm text-green-600 mt-4">
                    <span>سود شما از خرید</span>
                    <div className="flex items-center gap-1"><span>(%{totalPrices?.totalSavedPercentage}) {totalPrices?.totalSaved}</span> <ToomanIcon className="h-4 w-4" /> </div>
                </div>}

        </>

    )
}