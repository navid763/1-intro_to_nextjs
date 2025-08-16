let moment = require('moment-jalaali');
import CommentContain from "./comment-contain";
import StarRating from "./star-rating";


export default function CommentCard({ text, ratings }: { text: string; ratings: number | null }) {

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
            {ratings &&
                <div className="mt-4 px-1"><StarRating rating={ratings} starSize="6" fullStarColor="#f9a825" /></div>
            }
            <CommentContain text={text} />


        </div>
    )
}