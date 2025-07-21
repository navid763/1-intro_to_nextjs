
const ArrowDownIcon = ({ className }: { className: string }) => (
    <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"

        className={className}
        fill="currentColor"

    >
        <defs>
            <symbol
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z" />
            </symbol>
        </defs>
        <use xlinkHref="#expandMore" />
    </svg>
);
export default ArrowDownIcon;
