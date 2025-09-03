"use client"

import { createContext, useContext, useState, useEffect } from "react";

type colorObject = { title: string; hex: string }

type selectedColorContextType = {
    selectedCol: colorObject | null;
    setSelectedCol: (colorObj: colorObject | null) => void
}
type ProviderProps = {
    children: React.ReactNode;
    defaultColor: colorObject | null
}

const selectedColorContext = createContext<selectedColorContextType | null>(null);

export const useSelectedColor = () => {
    const context = useContext(selectedColorContext);
    if (!context) {
        throw new Error('useSelectedColor must be used inside SelectedColorProvider');
    }
    return context
}

export const SelectedColorProvider = ({ children, defaultColor = null }: ProviderProps) => {
    const [selectedCol, setSelectedCol] = useState<colorObject | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    // Set default color after hydration to prevent mismatch
    useEffect(() => {
        setSelectedCol(defaultColor);
        setIsHydrated(true);
    }, [defaultColor]);

    // Don't render the provider with state until hydrated
    if (!isHydrated) {
        return (
            <selectedColorContext.Provider value={{
                selectedCol: null,
                setSelectedCol: () => { }
            }}>
                {children}
            </selectedColorContext.Provider>
        );
    }

    return (
        <selectedColorContext.Provider value={{ selectedCol, setSelectedCol }}>
            {children}
        </selectedColorContext.Provider>
    )
}