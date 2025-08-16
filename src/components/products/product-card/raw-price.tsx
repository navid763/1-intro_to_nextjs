interface IpriceProps {
    rawPrice: number
    className?: string
}

export default function RawPrice({ rawPrice, className = "" }: IpriceProps) {

    return (

        <p className={`line-through ${className} `}>{rawPrice.toLocaleString()}</p>

    )
}