import ToggleSwitch from "./toggle-switch";

export default function AvailableProducts() {

    return (
        <div className="flex justify-between w-full items-center text-neutral-600 px-6">
            <span>فقط کالاهای موجود</span><ToggleSwitch />
        </div>
    )
}