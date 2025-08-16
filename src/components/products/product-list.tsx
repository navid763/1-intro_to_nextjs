import ColorsFilter from "./filters/colors-filter";
import CameraFilter from "./filters/camera-filter";
import PriceRangeSlider from "./filters/price-range";
import AvailableProducts from "./filters/avilable-products";
import SortingList, { productsSortings } from "./sorting/sorting-list";
import ProductCard from "./product-card/Product-Card";
import Link from "next/link";
import BreadCrumbs from "./bread-crumbs";
import { IProduct } from "@/models/product-props";
import "@/components/products/product-list.css";
import { FeaturesToShowObject } from "@/models/productFeatures";
import { Category } from "@/models/categories";


export default async function ProductList({ categoryId }: { categoryId: string }) {

    const res = await fetch(`http://localhost:5000/products?categoryId=${categoryId}`, { cache: "no-store" });
    const phones: IProduct[] = await res.json();

    const res2 = await fetch(`http://localhost:5000/categories?id=${categoryId}`, { cache: "no-store" });
    const category: Category[] = await res2.json();
    const categoryName = category[0].name;


    return (
        <>
            <BreadCrumbs />
            <div className="title text-lg px-4 py-2 mr-4"><h1>{categoryName}</h1></div>

            <div className="content flex flex-row w-full p-4 mt-2">

                <div className="side-bar flex flex-col items-center w-[25%] max-h-[200vh] border-1 border-gray-200 rounded-lg p-2 ">
                    <div className="text-xl text-neutral-600 px-2 py-1">فیلترها</div>
                    <ColorsFilter />
                    <CameraFilter />
                    <PriceRangeSlider minPrice={5000000} maxPrice={100000000} />
                    <AvailableProducts />
                </div>


                <div className="product-list w-[75%] flex flex-col items-center rounded-md px-2">

                    <div className="flex w-full h-10 border-b border-gray-200 gap-0.5">
                        <SortingList sortings={productsSortings} totalItems={{ entityType: "محصول", counts: 248 }} />
                    </div>

                    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full min-h-20 px-2">
                        {phones.map((phone) => {
                            return (
                                <Link href={`http://localhost:3000/products/${phone.slug}`} key={phone.id} ><ProductCard product={phone} /></Link>

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}