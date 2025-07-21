let moment = require('moment-jalaali');
import CommentContain from "./comment-contain";
import StarRating from "./star-rating";

const text = "سلام دوستان بعد یک ماه استفاده صادقانه باید بگم این موبایل خوش دست ترین گوشیه بروزه بازاره و یکی از اصلی ترین دلایل انتخاب بنده هم همین بود دوربینش معرکست خصوصا تو شب حیرت زدتون میکنه!(شبو روز میکنه😃) بخاطر هماهنگی بسیار عالی ای او اس با سخت افزار و دوربین که نگم براتون که همینه که ایفونو از اندروید کلا جدا میکنه! تو بازی ها و برنامه ها مثل فرفره میمونه که تو مدلای جدید داره بازی های کنسول هم بالا میاره که بازم صدقه سر ای او اسه ولی متسفانه توی ایران دردسر های خودمون هم داریم که کوچکترینشون نر افزار ها هستن که البته این مشکلی نداره و براحتی با وب حل میشه پیشنهاد هم میکنم بعد خرید حتما یه پاور بانک مگ سیف هم باهاش بخرید چون واقعا تجربه شارژ بیسیم اونم با مگ سیف ایفون یه چیز دیگست😃 ولی امان از دست این اپل که قرار نیست مشکل باطریو کامل حل کنه البته تو ۱۶ خیلی بهتر شده ولی بازم اگر مثل من تو طول روز زیاد استفاده داری حتما گزینه پاور بانک خصوصا مگ سیف فراموش نشه چون قراره روزی دوبار بزنیش به شارژ 😆 ولی اگر دنبال یه گوشی با دوربین خوبید و موبایل جمو جورم نمیخواید و ابعاد براتون مهم نیست و تو طولانی مدت اندروید اذیتتون نمیکنه بنظر من s24 ultra هم واقعا گزینه خوبیه"

export default function CommentCard() {

    return (
        <div className="fkex w-full flex-col border-t border-neutral-300 mt-4 px-2">
            <div className="flex items-center justify-start gap-4 mt-6">
                <div className="flex items-center justify-start gap-3">
                    <span className="text-xs text-neutral-400">کاربر فروشگاه</span>
                    <span className="text-xs bg-[#2e7b3230] text-[#2e7b32] px-2 py-1 text-center rounded-[50%]">خریدار</span>
                </div>
                <span className="w-1 h-1 p-0.5 rounded-full bg-neutral-300"></span>
                <span className="text-sm text-neutral-400">{moment("2025-07-20T10:00:00Z").format("jYYYY/jMM/jDD")}</span>
            </div>
            <div className="mt-4 px-1"><StarRating rating={4} starSize="6" fullStarColor="#f9a825" /></div>
            <CommentContain text={text} />


        </div>
    )
}