"use client"
import ProductBreadCrumbs from "@/components/products/product-page/product-page-breadCrumbs";
import SideIcons from "@/components/products/product-page/side-icons";
import ProductImageGallery from "@/components/products/product-page/gallery";
import Star from "@/components/icons/star";
import ColorSelecting from "@/components/products/product-page/color-selecting";
import ProductFeatures from "@/components/products/product-page/features";
import InfoFillIcon from "@/components/icons/info-filled";
import Price from "@/components/products/product-card/Price";
import RawPrice from "@/components/products/product-card/raw-price";
import DiscountPercent from "@/components/products/product-card/discount-percent";
import GuaranteeIcon from "@/components/icons/guarantee";
import DeliveryMethod from "@/components/products/product-page/delivery-method";
import ClubPointsAnnounce from "@/components/products/product-page/club-pions-announce";
import DeliveryAdvantageItem from "@/components/products/product-page/delivery-advantages-item";
import Tabs from "@/components/products/product-page/tabs";
import Introduction from "@/components/products/product-page/introduction";
import Specifications from "@/components/products/product-page/specifications";
import ScrollToSpecifications from "@/components/products/product-page/scroll-to-Specifications";
import InfoOutlineIcon from "@/components/icons/info-outlined";
import Comments from "@/components/products/product-page/comments";
import Preview, { previewHtml } from "@/components/products/product-page/preview";
import { IProduct, Warranty, ShippingMethod } from "@/models/product-props";
import { featuresExtractor } from "@/data/productFeatures";
import AddToCart from "@/components/products/product-page/add-to-cart";
import { SelectedColorProvider } from "@/context/selected-color/selected-color";


interface ProductPageWrapperProps {
    product: IProduct;
    warranty: Warranty;
    shippingMethod: ShippingMethod;
}

export default function ProductPageClient({ product, warranty, shippingMethod }: ProductPageWrapperProps) {


    const features = featuresExtractor(product, product.categoryId);
    const featurValueAndLabel = Object.values(features);

    return (
        <SelectedColorProvider defaultColor={{ title: product.colors[0].title, hex: product.colors[0].hex }}>

            <div className="main-container flex flex-col items-center w-full" dir="rtl">
                <ProductBreadCrumbs name={product.specifications.general.specs.model.value} />
                <div className="w-full flex mt-4 items-end">
                    <div className="w-[35%] ">
                        <p className="text-[#E6123D] w-[95%] py-3 px-4 mr-2 rounded-[3px]" style={{ backgroundColor: "rgba(230, 18, 61, 0.08)" }}>فروش ویژه</p>
                    </div>
                    <div className="w-[65%] flex flex-col justify-end ">
                        <p className="text-blue-300 text-sm px-2">breadcrumbs</p>
                        <div className="w-[95%] py-4 text-lg font-semibold px-2"><h1>{product.titleFa}</h1></div>

                    </div>
                </div>

                <div className="w-full flex items-start">
                    <div className="w-[35%]  flex mt-4" >
                        <SideIcons />
                        <div className="flex flex-col w-[90%] items-center  mt-4">
                            <ProductImageGallery images={product.images} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start w-[65%]  mt-[-1rem] p-1 pl-2">

                        <div className="w-full flex items-center ">
                            <div className="w-[60%] flex flex-col justify-start self-start items-center">
                                <h4 className="text-xs text-neutral-400 text-left p-1 pr-2.5">{product.titleEn}</h4>
                                <div className="flex w-full gap-1 p-2">
                                    <div className="flex text-xs items-center gap-1"><Star className="w-4 h-4" filledColor="#f9a825" /> <p className="text-neutral-700">{product.rating.average} <span className="text-neutral-400">({product.rating.totalReviews} امتیاز)</span></p></div>
                                    <span className="bg-neutral-200 text-xs text-neutral-700 flex items-center px-2.5 py-0.5 rounded-xl"> {product.comments.length} دیدگاه</span>
                                    <span className="bg-neutral-200 text-xs text-neutral-700 flex items-center px-2.5 py-0.5 rounded-xl">12 پرسش</span>
                                    <span className="bg-neutral-200 text-xs text-neutral-700 flex items-center px-2.5 py-0.5 rounded-xl">خلاصه دیدگاه‌ها </span>

                                </div>

                                <div className="flex flex-col w-full mt-4 px-3 py-2">
                                    <ColorSelecting colors={product.colors} />
                                </div>

                                <div className="w-full flex flex-col px-3 py-2">
                                    <span>ویژگی ها</span>
                                    <div className="w-full grid grid-cols-3 gap-1 py-2">
                                        {featurValueAndLabel.map(i => {
                                            return <ProductFeatures label={i[1]} value={i[0]} key={i[1]} />
                                        })}
                                    </div>
                                </div>

                                <ScrollToSpecifications />
                                {product.categoryId == 1 &&
                                    <div className="flex items-start gap-0.5 w-full mt-2 px-6">
                                        <InfoFillIcon className="w-11 h-11 text-neutral-500" />
                                        <p className="text-xs text-neutral-400 p-2">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
                                    </div>}

                            </div>


                            <div className="w-[40%] min-h-[50vh] bg-neutral-100 border border-neutral-300 rounded-md flex flex-col items-center self-start p-2">
                                <div className="flex flex-col items-end justify-center mt-4 gap-2 ml-2 w-full">
                                    <div className="flex justify-end gap-2 w-full">

                                        {product.pricing.discountPercentage > 0 &&
                                            <RawPrice rawPrice={product.pricing.originalPrice} />
                                        }
                                        <DiscountPercent percent={product.pricing.discountPercentage} parentClassName="w-[12%]" />
                                    </div>
                                    <Price discountedPrice={product.pricing.discountedPrice} iconClassName="w-4 h-4" textClass="text-xl" />
                                </div>

                                <div className="w-full flex items-center gap-4 mt-3 ">
                                    <AddToCart prodId={product.id} maxProducts={4} />
                                </div>
                                <div className="w-full flex items-center  text-neutral-800 gap-4 p-2 mr-1 mt-2">
                                    <div className="w-[8%] "><GuaranteeIcon className="w-5 h-5" /></div>
                                    <div className="w-[80%] text-xs"><p>{warranty.title}</p></div>
                                </div>

                                <div className="w-full mt-2 flex justify-center"><div className="h-1 border-b-1 border-neutral-300 w-[95%]"></div></div>

                                <DeliveryMethod method={shippingMethod.name} description={shippingMethod.description} />

                                <div className="w-full mt-2 flex justify-center"><div className="h-1 border-b-1 border-neutral-300 w-[95%]"></div></div>

                                <div className="flex w-[60%] gap-2 self-start items-center mt-6 px-2 relative">
                                    <ClubPointsAnnounce points={product.clubPoints} />
                                </div>

                                <div className="h-8"></div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="w-[98%] grid grid-cols-5 p-4  mt-15 border-t border-neutral-200 shadow-sm text-neutral-400">
                    <DeliveryAdvantageItem />
                </div>

                <div className="h-10 mt-10"></div>
                <div className="w-full relative">
                    <div className="sticky top-[var(--header-height)] z-40 bg-white shadow-md">
                        <Tabs />
                    </div>

                    <div id="introduction" className="w-[95%] mt-5 px-4 pb-6 text-gray-900 border-b-3 border-neutral-100">
                        <Introduction context={product.introduction} />
                    </div>

                    <div id="review" className="w-[95%] mt-5 px-4 pb-6 text-gray-900 border-b-3 border-neutral-100">
                        <div className="w-fit flex flex-col justify-between">
                            <span className="text-lg p-1">بررسی تخصصی</span>
                            <div className="w-full h-0.5 bg-red-500 rounded-md"></div>
                        </div>
                        <Preview htmlContent={previewHtml} />
                    </div>

                    <div id="specifications" className="w-[95%] flex flex-col mt-5 px-4 pb-6 text-gray-900 border-b-3 border-neutral-100">
                        <div className="w-fit flex flex-col justify-between">
                            <span className="text-lg p-1">مشخصات</span>
                            <div className="w-full h-0.5 bg-red-500 rounded-md"></div>
                        </div>
                        <Specifications specifics={product.specifications} />
                        {product.categoryId == 1 &&
                            <div className="flex items-center gap-1 text-sm text-neutral-400 mt-4 py-2">
                                <InfoOutlineIcon className="w-4 h-4" /> <p className="">هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06</p>
                            </div>}
                    </div>

                    <div id="comments" className="w-full min-h-[150vh] mt-5 px-4 pb-6 text-gray-900 border-b-3 border-neutral-100">
                        <div className="w-fit flex flex-col justify-between">
                            <span className="text-lg p-1">دیدگاه کاربران</span>
                            <div className="w-full h-0.5 bg-red-500 rounded-md"></div>
                        </div>
                        <Comments commentIds={product.comments} rating={product.rating} />
                    </div>

                </div>

            </div>

        </SelectedColorProvider>
    )
}