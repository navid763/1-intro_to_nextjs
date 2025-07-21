import StarRating from "./star-rating";
import InfoOutlineIcon from "@/components/icons/info-outlined";
import SortingList, { commentsSortings } from "../sorting/sorting-list";
import CommentCard from "./comment-card";


export default function Comments() {

    return (
        <div className="flex items-start w-full gap-2 mt-6">

            <div className="w-[25%] flex flex-col sticky top-8 z-10 p-2">
                <div className="flex items-center gap-1.5 mr-2"><span className="text-3xl">3.8</span><span className="text-sm">از 5</span></div>

                <div className="flex w-[90%] items-center gap-2 mt-4 mr-2">
                    <StarRating rating={3.8} starSize="5" fullStarColor="#f9a825" />
                    <p className="text-xs text-neutral-500">از مجموع ۱,۲۷۴ امتیاز</p>
                </div>
                <p className="text-sm text-neutral-400 mt-6 self-center">شما هم درباره این کالا دیدگاه ثبت کنید</p>

                <div className="w-[90%] self-center h-6 flex items-center justify-center bg-white text-red-500 text-center border border-red-600 rounded-lg cursor-pointer py-5 mt-2">ثبت دیدگاه</div>
                <div className="flex gap-1.5 self-center w-[80%] text-sm text-neutral-500 items-center mt-4">
                    <InfoOutlineIcon className="h-4 w-4 self-start mt-1" />
                    <p className="w-[90%]">
                        با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب دریافت کنید</p>
                </div>
            </div>


            <div className="w-[75%]">
                <div className="flex w-full h-10 gap-0.5 mt-1">
                    <SortingList sortings={commentsSortings} totalItems={{ entityType: "دیدگاه", counts: 24 }} />
                </div>

                <div className="flex flex-col w-full items-center">
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>

            </div>


        </div>
    )
}