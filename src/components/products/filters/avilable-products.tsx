import ToggleSwitch from "./toggle-switch";

export default function AvailableProducts() {

    return (
        <div className="flex justify-between w-[95%]  items-center border-b border-neutral-200 text-neutral-600 px-6 py-4 mt-4">
            <span>فقط کالاهای موجود</span><ToggleSwitch />
        </div>
    )
}