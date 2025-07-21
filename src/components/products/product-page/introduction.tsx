"use client"
import ArrowLeftIcon from "@/components/icons/arrow-left";
import { useState } from "react";

export default function Introduction() {
    const text = "گوشی موبایل اپل مدل iPhone 16، به عنوان یکی از جدیدترین مدل‌های این برند معتبر، با طراحی مدرن و ویژگی‌های پیشرفته، تجربه‌ای بی‌نظیر از دنیای تکنولوژی را برای کاربران فراهم می‌کند. این گوشی با ظرفیت 128 گیگابایت و رم 8 گیگابایت، عملکردی سریع و روان را ارائه می‌دهد که به راحتی از پس کارهای روزمره و multitasking برمی‌آید. طراحی این دستگاه با دقت و ظرافت بالا انجام شده و بدنه آن از مواد با کیفیت ساخته شده است که حس لوکس بودن را به کاربر منتقل می‌کند. قابلیت پشتیبانی از دو سیم کارت، امکان استفاده همزمان از دو شماره تلفن را برای کاربران فراهم می‌کند که این ویژگی به‌خصوص برای افرادی که به دو شماره مختلف برای کار و زندگی شخصی نیاز دارند بسیار مفید است. دوربین‌های با کیفیت iPhone 16، تجربه عکاسی فوق‌العاده‌ای را ارائه می‌دهند و با فناوری‌های نوین، امکان ثبت لحظات خاص با جزئیات بالا را فراهم می‌کنند. همچنین، باتری با عمر طولانی و قابلیت‌های شارژ سریع، این اطمینان را به شما می‌دهد که می‌توانید در طول روز به راحتی از گوشی خودتان استفاده کنید. به‌طور کلی، iPhone 16 یک انتخاب عالی برای کسانی است که به دنبال ترکیبی از کیفیت، قدرت و طراحی مدرن هستند. همانطور که می‌دانید گوشی‌های آیفون با پارت نامبرهای مختلفی از جمله CH، ZAA، LLAT ZPAو ... در بازار وجود دارند. پارت نامبر CH مربوط به کشور چین است که تفاوت خاصی با دیگر پارت نامبرها ندارند و تنها در مورد استفاده از تماس‌های صوتی و تماس‌های گروهی در نرم افزار فیس تایم شامل محدودیت است. این پارت نامبر از دو سیم‌کارت فیزیکی پشتیبانی می‌کند که یک نکته مثبت محسوب می‌شود. این گوشی، مانند تمامی گوشی‌های عرضه‌شده در دیجی‌کالا، به صورت قانونی و تجاری وارد کشور شده و با رجیستر رسمی، کارت گارانتی معتبر و کد فعال‌سازی به شما تحویل داده می‌شود."
    const [showMore, setShowMore] = useState(false);
    const previewText = text.split(" ").slice(0, 90).join(" ");

    return (
        <>
            <div className="w-fit flex flex-col justify-between">
                <span className="text-lg p-1">معرفی</span>
                <div className="w-full h-0.5 bg-red-500 rounded-md"></div>
            </div>
            {!showMore &&
                <>
                    <p className="text-base text-gray-900 mt-4 p-2">
                        {previewText + "..."}
                    </p>
                    <div className="flex gap-0.5 text-base text-blue-500 items-center mr-4 cursor-pointer" onClick={() => setShowMore(true)}>
                        <span>بیشتر</span>
                        <ArrowLeftIcon className="w-4 h-4" />
                    </div>
                </>
            }

            {showMore &&
                <>
                    <p className="text-base text-gray-900 mt-4 p-2">
                        {text}
                    </p>
                    <div className="flex gap-0.5 text-base text-blue-500 items-center mr-4 cursor-pointer" onClick={() => setShowMore(false)}>
                        <span>بستن</span>
                        <ArrowLeftIcon className="w-4 h-4" />
                    </div>
                </>

            }

        </>
    )
}