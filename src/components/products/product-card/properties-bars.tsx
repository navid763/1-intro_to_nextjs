import style from "./product-card.module.css";

export interface IProperties {
    label: string
    value: string
}


export default function PropertiesBars({ label, value }: IProperties) {
    return (
        <div className={`${style['properties-container']} flex flex-row-reverse justify-between bg-gray-200 w-[60%] px-2 py-0.5 rounded`}><p>{value}</p> <p>{label}</p> </div>
    )
}



export const phoneProperties = [
    { label: "RAM", value: "8GB" },
    { label: "STORAGE", value: "256GB" },
    { label: "CPU", value: "Exynus" },
    { label: "GBU", value: "Mali" }

]