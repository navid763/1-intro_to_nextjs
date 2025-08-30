"use client";
import { useState } from "react";

export default function ToggleSwitch() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div
            onClick={() => setEnabled(!enabled)}
            dir="ltr"

            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${enabled ? "bg-red-500" : "bg-gray-300"
                }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-0" : "translate-x-6"
                    }`}
            ></div>
        </div>
    );
}
