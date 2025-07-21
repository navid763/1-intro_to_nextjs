

const ShareIcon = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="currentColor"
        className={className}



    >
        <defs>
            <symbol xmlns="http://www.w3.org/2000/svg" id="a" viewBox="0 0 24 24">
                <path d="m15.917 14.16-6.94 3.47a3 3 0 1 1-.895-1.789l6.94-3.47a3.021 3.021 0 0 1 0-.742l-6.94-3.47a3 3 0 1 1 .895-1.789l6.94 3.47a3 3 0 1 1 0 4.319z" />
            </symbol>
        </defs>
        <use xlinkHref="#a" />
    </svg>
)
export default ShareIcon
