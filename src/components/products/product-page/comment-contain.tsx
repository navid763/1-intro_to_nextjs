"use client";
import ArrowLeftIcon from "@/components/icons/arrow-left";
import { useMemo, useState } from "react";

type CommentContainProps = {
    text: string;
    maxWords?: number;
};

export default function CommentContain({ text = "", maxWords = 90 }: CommentContainProps) {
    const [showMore, setShowMore] = useState(false);

    const words = useMemo(() => text.split(" "), [text]);
    const isLong = words.length > maxWords;
    const shortText = useMemo(() => words.slice(0, maxWords).join(" "), [words, maxWords]) + "...";

    return (
        <div className="flex flex-col">
            <p className="text-neutral-900 p-2 leading-loose break-words">
                {showMore || !isLong ? text : shortText}
            </p>

            {!showMore && isLong && (
                <div
                    className="flex items-center text-sm text-blue-500 cursor-pointer"
                    onClick={() => setShowMore(true)}
                >
                    <span className="ml-1">بیشتر</span>
                    <ArrowLeftIcon className="h-4 w-4" />
                </div>
            )}
        </div>
    );
}
