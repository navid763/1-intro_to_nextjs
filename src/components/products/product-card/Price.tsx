import ToomanIcon from "@/components/icons/Tooman"

interface IpriceProps {
    discountedPrice: number
    iconClassName?: string
    textSize?: string
}

export default function Price({ discountedPrice = 150000, iconClassName = "w-5 h-5", textSize }: IpriceProps) {

    return <div className={`flex gap-1 items-center min-h-5 text-neutral-900 ${textSize} `}>{discountedPrice.toLocaleString()} <ToomanIcon className={iconClassName} /></div>
}