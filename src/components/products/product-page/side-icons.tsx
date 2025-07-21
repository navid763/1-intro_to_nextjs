"use client"
import { sideIconsMap } from "./side-icons-map";
import SideIconsItem from "./side-icons-item";

export default function SideIcons() {
    return (
        <div className="flex flex-col w-[10%] items-center justify-start min-h-4 gap-2">
            {sideIconsMap.map(i => {
                return <SideIconsItem iconComponent={i.iconComponent} message={i.quote} action={i.action} key={i.quote} />
            })}
        </div>
    )
}