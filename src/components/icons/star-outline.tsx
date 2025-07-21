export default function StarOutlineIcon({ className, fill = "currentColor" }: { className?: string, fill?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            className={className}

        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.575 9.05L12.43 2.415a.455.455 0 00-.865 0L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014zm-3.694 2.003L12 7.585l.671 2.08.449 1.388 3.64-.007-1.768 1.28-1.182.855 1.133 3.464-1.765-1.288-1.18-.86-2.94 2.146.679-2.075.453-1.387-2.95-2.135 2.181.004 1.46.003z"
            />
        </svg>
    );
}
