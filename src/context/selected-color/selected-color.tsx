"use client"

import { createContext, useContext, useState } from "react";

type colorObject = { title: string; hex: string }

type selectedColorContextType = {
    selectedCol: colorObject | null;
    setSelectedCol: (colorObj: colorObject | null) => void
}
type ProviderProps = {
    children: React.ReactNode;
    defaultColor: colorObject | null
}


const selectedColorConrext = createContext<selectedColorContextType | null>(null);

export const useSelectedColor = () => {
    const context = useContext(selectedColorConrext);
    if (!context) {
        throw new Error('useSelectedColor must be used inside SelectedColorProvider');
    }
    return context
}

export const SelectedColorProvider = ({ children, defaultColor = null }: ProviderProps) => {

    const [selectedCol, setSelectedCol] = useState<colorObject | null>(defaultColor);

    return (
        <selectedColorConrext.Provider value={{ selectedCol, setSelectedCol }}>
            {children}
        </selectedColorConrext.Provider>
    )
}