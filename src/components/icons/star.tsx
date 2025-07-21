interface StarIconProps {
    className?: string;
    fillPercentage?: number; // 0-100
    filledColor?: string;
    emptyColor?: string;
}

export default function StarIcon({
    className = "",
    fillPercentage = 100,
    filledColor = "currentColor",
    emptyColor = "#c4c4c4"
}: StarIconProps) {

    const gradientId = `star-gradient-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
        >
            <defs>
                <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop
                        offset={`${fillPercentage}%`}
                        stopColor={filledColor}
                    />
                    <stop
                        offset={`${fillPercentage}%`}
                        stopColor={emptyColor}
                    />
                </linearGradient>
            </defs>
            <path
                d="M11.98 2.1a.455.455 0 00-.414.315L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014-2.144-6.635a.455.455 0 00-.451-.315z"
                fill={`url(#${gradientId})`}
            />
        </svg>
    );
}