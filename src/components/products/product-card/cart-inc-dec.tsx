import CartIcon from "@/components/icons/Cart"

export default function CartIncDec() {


    return (
        <div className="relative flex items-center justify-center">
            <div className="px-2 py-4 h-7 flex justify-center items-center rounded-2xl bg-amber-500">
                <CartIcon className="w-7 h-7 text-white" />
            </div>
            <div className="w-8 h-7 bg-white rounded-l-full -mr-1 z-10 text-xs flex items-center justify-center text-gray-500">
                255
            </div>
        </div>
    )
}