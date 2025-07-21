import Image from "next/image";
interface IproductImageProps {
    imageSrc: string
    width?: number
    height?: number
}

export default function ProductImage({ imageSrc, width = 180, height = 50 }: IproductImageProps) {
    return (
        <div className="w-[95%] flex justify-center">
            <Image src={imageSrc} width={width} height={height} alt="" />
        </div>
    )
}