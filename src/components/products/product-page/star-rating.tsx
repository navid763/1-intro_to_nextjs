import StarIcon from "@/components/icons/star";
import StarOutlineIcon from "@/components/icons/star-outline";
interface IStarRatingProps {
    rating: number
    starSize: string
    fullStarColor?: string
}


export default function StarRating({ rating, starSize, fullStarColor }: IStarRatingProps) {
    const MAXIMUM_RATE = 5
    const integerRate = Math.floor(rating);
    let decimalRate = +(rating - integerRate).toFixed(1);
    if (decimalRate > 0.5) {
        decimalRate = 0.65
    } if (decimalRate < 0.5 && decimalRate !== 0) {
        decimalRate = 0.45
    };
    const emptyStars = decimalRate > 0 ? (MAXIMUM_RATE - 1) - integerRate : MAXIMUM_RATE - integerRate;


    let fullStarsLi = [];
    for (let i = 1; i <= integerRate; i++) {
        fullStarsLi.push(<StarIcon className={`h-${starSize} w-${starSize}`} filledColor={fullStarColor} key={i} />);
    }

    let emptyStarsLi = [];
    if (emptyStars >= 1) {
        for (let i = 1; i <= emptyStars; i++) {
            emptyStarsLi.push(<StarOutlineIcon className={`h-${starSize} w-${starSize}`} fill="#bdbcbc" key={i} />)
        }
    }

    return (
        <div className="flex items-center">
            {fullStarsLi}
            {decimalRate > 0 &&
                <StarIcon className={`h-${starSize} w-${starSize}`} fillPercentage={decimalRate * 100} filledColor={fullStarColor} />
            }
            {emptyStars > 0 && emptyStarsLi}
        </div >
    )

}