"use client"
interface ISortItem {
    label: string;
    value: string;
    handler: (value: string) => void;
    active: boolean;
}
export default function SortItem({ value, label, handler, active }: ISortItem) {
    return (
        <span
            className={`text-xs cursor-pointer ${active ? "text-red-500" : "text-neutral-500"}`}
            onClick={() => handler(value)}>
            {label}
        </span>
    )
}