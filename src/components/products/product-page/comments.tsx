import StarRating from "./star-rating";
import InfoOutlineIcon from "@/components/icons/info-outlined";
import SortingList, { commentsSortings } from "../sorting/sorting-list";
import CommentCard from "./comment-card";
import { IComment } from "@/models/comments";
import { Rating } from "@/models/product-props";

interface CommentsProps {
    commentIds: number[];
    rating: Rating

}


export default async function Comments({ commentIds, rating }: CommentsProps) {
    let stringCommentIds = commentIds.map(c => c.toString());
    const resAllComments = await fetch("http://localhost:5000/comments", { cache: "no-store" }) // not for real APIs
    const allComments: IComment[] = await resAllComments.json();
    const comments = allComments.filter(c => stringCommentIds.includes(c.id.toString()));




    return (
        <div className="flex items-start w-full gap-2 mt-6">

            <div className="w-[25%] flex flex-col sticky top-8 z-10 p-2">
                <div className="flex items-center gap-1.5 mr-2"><span className="text-3xl">{rating.average}</span><span className="text-sm">از 5</span></div>

                <div className="flex w-[90%] items-center gap-2 mt-4 mr-2">
                    <StarRating rating={rating.average} starSize="5" fullStarColor="#f9a825" />
                    <p className="text-xs text-neutral-500">از مجموع {rating.totalReviews} امتیاز</p>
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
                    {
                        comments.map(comment => {
                            return <CommentCard text={comment.content} ratings={comment.rating} key={comment.id} />
                        })
                    }
                </div>

            </div>


        </div>
    )
}