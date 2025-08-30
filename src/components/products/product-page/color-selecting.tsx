"use client"
import { IProductColors } from "../product-card/color-options";
import ColorCircle from "./color-circle";
import { useSelectedColor } from "@/context/selected-color/selected-color";
interface IColors {
    title: string
    hex: string
}
export default function ColorSelecting({ colors }: IProductColors) {
    // const [selectedColor, setSelectedColor] = useState<IColors | null>(colors[0]); // by default the first color has been selected

    const { selectedCol, setSelectedCol } = useSelectedColor();

    return (
        <>
            <div><span>رنگ:</span> <span className="text-neutral-600">{selectedCol ? selectedCol.title : <span className="text-sm text-red-300">رنگی برای محصول انتخاب کنید</span>}</span></div>
            <div className="grid grid-cols-10 gap-2 p-2">
                {colors.map(c => {
                    return (
                        <div key={c.hex} onClick={() => setSelectedCol(selectedCol?.hex === c.hex ? null : c)}>
                            <ColorCircle hex={c.hex} title={c.title} selected={c.title === selectedCol?.title} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}