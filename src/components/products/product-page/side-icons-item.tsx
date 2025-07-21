"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type ActionType = "share" | "fave"

interface ISideIconsItem {
    iconComponent: (color?: string) => React.ReactNode;
    message: string;
    action: ActionType;
}


export default function SideIconsItem({ iconComponent, message, action }: ISideIconsItem) {
    const [hover, setHover] = useState(false);
    const [isFaved, setIsFaved] = useState(false);

    const actionSelector = async () => {

        const actionsMap: Record<ActionType, () => Promise<void>> = {
            share: async () => {
                try {
                    await window.navigator.clipboard.writeText(window.location.href);
                    toast.success("✔️لینک محصول کپی شد")
                } catch (error) {
                    console.error("error on copying the page url", error);
                }
            },
            fave: async () => {
                if (!isFaved) {
                    toast.info("❤️به علاقه مندی ها اضافه شد");
                    setIsFaved(true);
                } else { setIsFaved(false) }

            }
        }

        const actionHandler = actionsMap[action];

        if (actionHandler) {
            await actionHandler();

        } else {
            console.warn(`there is no action defined for ${action}`);
        }
    };

    const onClickHandler = () => {
        actionSelector();
        setHover(false);
    }
    const iconColor = isFaved ? "text-red-600" : "text-neutral-600"

    return (
        <>
            <div
                className="flex justify-center items-center gap-1 relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onClickHandler}

            >
                <span>{iconComponent(iconColor)}</span>
                {hover && (
                    <p className="w-[150px] bg-[#3f4064] text-white text-sm  rounded-sm p-2 absolute transform right-10 z-10 text-center">
                        {message}
                    </p>
                )}
            </div>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={true}
                pauseOnFocusLoss
                draggable
                theme="colored"
            />

        </>

    );


}
