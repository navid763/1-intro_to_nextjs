

export default function ProductFeatures({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-neutral-200 rounded-lg py-2 flex flex-col items-center gap-1">
            <span className="text-xs text-neutral-500">{label}</span>
            <span className="text-xs text-neutral-700 font-bold">{value}</span>
        </div>
    )
}

export const features = {
    camera: ["50", "رزولوشن دوربین"],
    memory: ["8", "مقدار رم"],
    screenSize: ["6.8", "اندازه صفحه نمایش"],
    battery: ["4800", "ظرفیت باتری"]
}