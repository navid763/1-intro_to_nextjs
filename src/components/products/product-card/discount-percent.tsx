interface IDiscountPercentProps {
    percent?: number | boolean
    parentClassName?: string
}
export default function DiscountPercent({ percent, parentClassName }: IDiscountPercentProps) {

    if (percent) {
        return (
            <div className={parentClassName}>
                <p className="text-xs text-white p-1 bg-red-700 rounded-3xl text-center ">{percent}%</p>
            </div>
        )
    }
    return null

}