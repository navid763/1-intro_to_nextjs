import ProductImage from "./product-image";
import ColorOptions from "./color-options";
import PropertiesIconsList from "./properties-icons-list";
import ResidaulStore from "./store-residual";
import DiscountPercent from "./discount-percent";
import Price from "./Price";
import RawPrice from "./raw-price";
import StarIcon from "@/components/icons/star";
import { IProduct } from "@/models/product-props";
import { featuresExtractor } from "@/data/productFeatures";

interface IProductCardProps {
    product: IProduct;

}


export default function ProductCard({ product }: IProductCardProps) {
    const features = featuresExtractor(product, product.categoryId)


    return (
        <div id="product-card" className="product-card p-1 flex flex-col items-center border-b border-gray-200">
            <div className="space-div h-6 w-[90%] flex justify-start items-baseline"><p className=" w-[50%] text-sm text-white px-1 py-0.5 bg-red-500 rounded-3xl text-center">پیشنهادی فروشگاه</p></div>
            <div className="flex flex-row w-full mt-3">
                <ProductImage imageSrc={product.images[0]} width={180} height={100} />
                <ColorOptions colors={product.colors} />
            </div>
            {
                features &&
                <div className="w-[90%] mt-3 grid grid-cols-4 ">
                    <PropertiesIconsList features={features} />
                </div>
            }

            <h3 className="w-full py-3 px-2 mt-2 font-bold text-sm text-neutral-700">{product.titleFa}</h3>

            <div className="star-store flex justify-between w-full px-2 mt-3">
                <div className="w-[70%]"><ResidaulStore residual={product.inventory.available} minimumToShow={15} /></div>
                <div className="w-[15%] items-center flex justify-evenly"><span className="text-xs text-neutral-600">{product.rating.average}</span><StarIcon className="w-4 h-4 text-yellow-400" /></div>
            </div>
            <div className="flex items-start justify-between w-full px-2 py-1 mt-7">
                <div className="w-[15%]"><DiscountPercent percent={product.pricing.discountPercentage ? product.pricing.discountPercentage : false} /></div>
                <div className="flex flex-col justify-center gap-0.5 items-end w-[60%]">
                    <Price discountedPrice={product.pricing.discountedPrice} />
                    <div className="h-5 flex gap-1 items-center justify-center text-sm text-neutral-400 ml-6 mt-1">
                        {product.pricing.discountPercentage > 0 &&
                            <RawPrice rawPrice={product.pricing.originalPrice} />
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}