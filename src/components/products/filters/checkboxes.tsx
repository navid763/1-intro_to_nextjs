interface IFiltersCheckbox {
    value: string
    checked: boolean
    Handler: (value: string) => void
    label: string
}


export default function Checkboxes({ value, checked, Handler, label }: IFiltersCheckbox) {

    return (
        <div className=" w-full">
            <label
                className="flex gap-2 justify-between items-center w-[60%] cursor-pointer text-gray-600  py-4">
                <input
                    type="checkbox"
                    value={value}
                    checked={checked}
                    onChange={() => Handler(value)}
                    className="w-4 h-4 accent-blue-500"
                />{value} {label}</label>
        </div>
    )
}