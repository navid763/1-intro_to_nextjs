"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
    images: string[];
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
    const [mainIndex, setMainIndex] = useState(0);
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [sliderStartIndex, setSliderStartIndex] = useState(0);

    const openSlider = (index: number) => {
        setMainIndex(index);
        setIsSliderOpen(true);
        // تنظیم نقطه شروع thumbnails در اسلایدر بر اساس تصویر انتخاب شده
        setSliderStartIndex(Math.max(0, index - 5));
    };

    const goToNext = () => {
        const newIndex = (mainIndex + 1) % images.length;
        setMainIndex(newIndex);

        // تنظیم مجدد نقطه شروع thumbnails در اسلایدر
        if (newIndex >= sliderStartIndex + 10) {
            setSliderStartIndex(newIndex - 9);
        } else if (newIndex < sliderStartIndex) {
            setSliderStartIndex(newIndex);
        }
    };

    const goToPrev = () => {
        const newIndex = (mainIndex - 1 + images.length) % images.length;
        setMainIndex(newIndex);

        // تنظیم مجدد نقطه شروع thumbnails در اسلایدر
        if (newIndex < sliderStartIndex) {
            setSliderStartIndex(Math.max(0, newIndex));
        } else if (newIndex >= sliderStartIndex + 10) {
            setSliderStartIndex(Math.max(0, newIndex - 9));
        }
    };

    const moveSliderThumbnails = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setSliderStartIndex(Math.min(images.length - 10, sliderStartIndex + 1));
        } else {
            setSliderStartIndex(Math.max(0, sliderStartIndex - 1));
        }
    };

    // محاسبه thumbnails قابل نمایش در صفحه محصول (حداکثر 4)
    const displayedThumbnails = images.slice(0, 4);

    // محاسبه thumbnails قابل نمایش در اسلایدر (حداکثر 10)
    const sliderThumbnails = images.slice(sliderStartIndex, sliderStartIndex + 10);

    return (
        <div className="w-full">
            {/* نمایش تصویر اصلی در صفحه محصول */}
            <div className="w-full cursor-pointer" onClick={() => openSlider(mainIndex)}>
                <Image
                    src={images[mainIndex]}
                    alt={`Product Image ${mainIndex + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain rounded"
                />
            </div>

            {/* thumbnailهای زیر تصویر اصلی - حداکثر 4 عدد */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
                {displayedThumbnails.map((img, index) => (
                    <div
                        key={index}
                        className={`w-16 h-16 cursor-pointer border ${index === mainIndex ? "border-blue-500" : "border-transparent"}`}
                        onClick={() => setMainIndex(index)}
                    >
                        <Image
                            src={img}
                            alt={`Thumb ${index + 1}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full rounded"
                        />
                    </div>
                ))}

                {/* نمایش دکمه "مشاهده بیشتر" اگر بیش از 4 تصویر وجود داشته باشد */}
                {images.length > 4 && (
                    <div
                        className="w-16 h-16 cursor-pointer border border-gray-300 rounded flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => openSlider(mainIndex)}
                    >
                        <span className="text-xs text-gray-600">+{images.length - 4}</span>
                    </div>
                )}
            </div>

            {/* اسلایدر تمام‌صفحه */}
            {isSliderOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
                    {/* دکمه بستن */}
                    <button
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
                        onClick={() => setIsSliderOpen(false)}
                    >
                        ✕
                    </button>

                    {/* تصویر اصلی در اسلایدر */}
                    <div className="max-w-3xl w-full px-4">
                        <Image
                            src={images[mainIndex]}
                            alt={`Slide ${mainIndex + 1}`}
                            width={800}
                            height={800}
                            className="object-contain w-full h-[70vh]"
                        />
                    </div>

                    {/* دکمه‌های ناوبری */}
                    <div
                        className="absolute left-4 text-white text-3xl cursor-pointer select-none hover:text-gray-300 transition-colors"
                        onClick={goToPrev}
                    >
                        ›
                    </div>
                    <div
                        className="absolute right-4 text-white text-3xl cursor-pointer select-none hover:text-gray-300 transition-colors"
                        onClick={goToNext}
                    >
                        ‹
                    </div>

                    {/* thumbnailهای داخل اسلایدر - حداکثر 10 عدد با قابلیت اسکرول */}
                    <div className="flex items-center gap-2 mt-6 px-4">
                        {/* دکمه اسکرول به چپ */}
                        {sliderStartIndex > 0 && (
                            <button
                                className="text-white text-xl hover:text-gray-300 transition-colors p-1"
                                onClick={() => moveSliderThumbnails('prev')}
                            >
                                ‹
                            </button>
                        )}

                        {/* thumbnails */}
                        <div className="flex gap-2">
                            {sliderThumbnails.map((img, index) => {
                                const actualIndex = sliderStartIndex + index;
                                return (
                                    <div
                                        key={actualIndex}
                                        className={`w-16 h-16 cursor-pointer border ${actualIndex === mainIndex ? "border-white" : "border-transparent"}`}
                                        onClick={() => setMainIndex(actualIndex)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumb ${actualIndex + 1}`}
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full rounded"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* دکمه اسکرول به راست */}
                        {sliderStartIndex + 10 < images.length && (
                            <button
                                className="text-white text-xl hover:text-gray-300 transition-colors p-1"
                                onClick={() => moveSliderThumbnails('next')}
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export const imagesMap = [
    "/images/phones/s24fe/1.jpg",
    "/images/phones/s24fe/2.jpg",
    "/images/phones/s24fe/3.jpg",
    "/images/phones/s24fe/4.jpg",
    "/images/phones/s24fe/3.jpg"
]