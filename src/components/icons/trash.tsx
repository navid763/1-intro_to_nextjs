const TrashIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
        />
    </svg>
);

export default TrashIcon;
