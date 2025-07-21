
export default function Footer() {

    return (
        <footer className="w-full bg-neutral-50 mt-12 pt-6 pb-10 px-6 border-t border-neutral-300 text-sm text-neutral-500" dir="rtl">
            <div className="main-container grid grid-cols-2 mt-4 md:grid-cols-4 gap-6 px-6">
                <div>
                    <h4 className="text-neutral-800 font-semibold mb-2">درباره ما</h4>
                    <ul className="flex flex-col gap-1 text-neutral-500">
                        <li>معرفی فروشگاه</li>
                        <li>تماس با ما</li>
                        <li>فرصت‌های شغلی</li>
                        <li>همکاری با ما</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-neutral-800 font-semibold mb-2">راهنمای خرید</h4>
                    <ul className="flex flex-col gap-1 text-neutral-500">
                        <li>نحوه ثبت سفارش</li>
                        <li>رویه ارسال سفارش</li>
                        <li>شیوه‌های پرداخت</li>
                        <li>سوالات متداول</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-neutral-800 font-semibold mb-2">خدمات مشتریان</h4>
                    <ul className="flex flex-col gap-1 text-neutral-500">
                        <li>پاسخگویی به شکایات</li>
                        <li>شرایط بازگشت کالا</li>
                        <li>حریم خصوصی کاربران</li>
                        <li>قوانین و مقررات</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center ml-10">
                    <h4 className="text-neutral-800 font-semibold mb-2">ما را دنبال کنید</h4>
                    <div className="flex gap-3 mt-4">
                        <span className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center text-white">📱</span>
                        <span className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center text-white">📘</span>
                        <span className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center text-white">📷</span>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-neutral-400 mt-8">
                © {new Date().getFullYear()} تمامی حقوق محفوظ است.
            </div>
        </footer>

    )
}