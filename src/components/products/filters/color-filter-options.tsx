interface IColorFilterOptions {
    colorHex: string
    colorTitle: string
    slug: string
    handler: (colorHex: string) => void
    selected: boolean
}

export default function ColorFilterOptions({ colorHex, colorTitle, slug, handler, selected }: IColorFilterOptions) {
    return (
        <div className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer" onClick={() => handler(slug)}>
            <div className=" flex justify-center items-center border border-neutral-200 rounded-xl p-1" style={{ border: selected ? "2px solid #f76b8a" : "" }}><div className="w-7 h-7 border border-neutral-100 rounded-lg" style={{ backgroundColor: colorHex }}></div></div>
            <span className="text-sm text-neutral-700">{colorTitle}</span>
        </div>
    )
}