import React from "react";

interface InfoOutlineIconProps {
    className: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const InfoOutlineIcon = ({ className, onMouseEnter, onMouseLeave }: InfoOutlineIconProps) => {
    return (
        <svg
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
            />
        </svg>
    );
};

export default InfoOutlineIcon;
