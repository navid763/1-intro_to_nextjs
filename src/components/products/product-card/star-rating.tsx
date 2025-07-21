import Star from "@/components/icons/star";
import StarHalf from "@/components/icons/star-half";
interface IstarsProps {
    stars: number
    amount: string
}



export default function StarRating(starProps: IstarsProps) {
    const { stars, amount } = starProps;

    let integerStar = Math.floor(stars);
    let decimalStar = +(stars - integerStar).toFixed(1);
    let starsLi = []

    for (let i = 0; i < integerStar; i++) {
        starsLi.push(<Star key={i} />)
    }

    return (
        <div className="star-rating flex gap-2 items-center px-2 py-0.5">
            <p className="text-amber-400 text-xs">({amount} <span className="text-md">نظر)</span></p>
            <div className="flex gap-0.5">
                {decimalStar > 0.0 && <StarHalf />}
                {integerStar >= 1 && starsLi}
            </div>
            <p className="text-sm">{stars}</p>
        </div>
    )
}