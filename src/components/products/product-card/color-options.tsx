import ColorCircle from "./color-circle";

export interface IProductColors {
    colors: {
        title: string
        hex: string
    }[]
}


export default function ColorOptions({ colors }: IProductColors) {
    let colorsLi = [];
    const MAXIMUM_CIRCLES = 4  // maximum 4 color-circles can be shown
    for (let i = 0; i < colors.length; i++) {
        if (i < MAXIMUM_CIRCLES) {
            colorsLi.push(<ColorCircle color={colors[i].hex} key={i} />)
        }
    }
    return (
        <div className="color-options flex flex-col items-center justify-start gap-0.5 w-[5%]">
            {colorsLi}
            {colors.length > MAXIMUM_CIRCLES && <div className="h-2 w-2 text-[8px] text-center text-gray-500 flex justify-center">+</div>
            }
        </div>
    )
}

export const productColors = [
    { title: "طوسی", hex: "#838988" },
    { title: "صورتی", hex: "#f47c9a" },
    { title: "سفید", hex: "#ffffff" },
    { title: "سبز", hex: "#65df8e" },
    { title: "زغالی", hex: "#272727" }

]