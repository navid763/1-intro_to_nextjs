import React from "react";

const InfoFillIcon = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10-5a1 1 0 110 2 1 1 0 010-2zm-2 3h3v7h-2v-5h-1v-2z"
            />
        </svg>
    );
};

export default InfoFillIcon;
