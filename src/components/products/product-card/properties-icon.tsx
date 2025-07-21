interface PropertyIconItemProps {
    children: React.ReactNode;
    label: string;
}

export default function PropertiesIcon({ children, label }: PropertyIconItemProps) {
    return (
        <div className="flex justify-center gap-1 items-center text-gray-600">
            <span className="text-[0.65rem]">{label}</span>
            {children}
        </div>
    );
}
