export default function ResidaulStore({ residual, minimumToShow }: { residual: number; minimumToShow: number }) {
    return (
        <>
            {
                residual <= minimumToShow &&
                <p className="text-red-500 text-xs">تنها <span>{residual}</span> عدد در انبار باقی مانده</p>

            }
        </>
    )
}