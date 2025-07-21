export default function ResidaulStore({ residual }: { residual: string }) {
    return <p className="text-red-500 text-xs">تنها <span>{residual}</span> عدد در انبار باقی مانده</p>
}