interface IpriceProps {
    rawPrice?: number
    parentClassName: string
}

export default function RawPrice({ rawPrice = 0, parentClassName }: IpriceProps) {

    return (
        <div className={parentClassName}>
            {rawPrice ? <p className="line-through">{rawPrice.toLocaleString()}</p> : ""}
        </div>
    )
}