
const HeartIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"

    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 3a6 6 0 00-3.844 10.607l6.982 6.492a2 2 0 002.724 0l6.993-6.503C21.685 12.504 22.5 10.818 22.5 9A6 6 0 0012 5.03 5.995 5.995 0 007.5 3zm-2.502 9.124l-.044-.039a4 4 0 116.147-4.83 1 1 0 001.799 0A4 4 0 0120.5 9a3.99 3.99 0 01-1.461 3.091L12 18.634l-7.002-6.51z"
        />
    </svg>
);

export default HeartIcon;
