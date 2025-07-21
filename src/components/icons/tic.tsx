import React from "react";

const TicIcon = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"

            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z" />
        </svg>
    );
};

export default TicIcon;
