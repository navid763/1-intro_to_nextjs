import style from "./product-card.module.css";

export default function ColorCircle({ color }: { color: string }) {
    return (
        <div
            className="h-2 w-2 bg-[${color}] rounded-[50%] border-gray-300 border-1 hover:scale-115 cursor-pointer transition-transform duration-200"
            style={{ backgroundColor: color }}
        ></div>
    )

}
