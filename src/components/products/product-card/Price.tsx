import ToomanIcon from "@/components/icons/Tooman"

interface IpriceProps {
    discountedPrice: number | undefined
    iconClassName?: string
    textClass?: string
    quantity?: number
}

export default function Price({ discountedPrice, iconClassName = "w-5 h-5 text-neutral-900", textClass, quantity }: IpriceProps) {
    if (discountedPrice) {
        const price = quantity ? quantity * discountedPrice : discountedPrice;
        return <div className={`flex gap-1 items-center min-h-5  ${textClass} `}>{price.toLocaleString()} <ToomanIcon className={iconClassName} /></div>
    }
}