"use client"

//v1

// import { useEffect, useReducer } from "react"
// import CartContext, { cartReducer, cartInitState } from "./action-state"


// export function CartProvider({ children }: { children: React.ReactNode }) {

//     const getInitState = () => {
//         if (typeof window !== "undefined") {
//             const saved = localStorage.getItem("cart");
//             if (saved) {
//                 try {
//                     return JSON.parse(saved);
//                 }
//                 catch (e) {
//                     console.error("Error parsing cart from localStorage:", e);
//                 }
//             }
//         }
//         return cartInitState;
//     }


//     const [state, dispatch] = useReducer(cartReducer, [], getInitState);

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(state))
//     }, [state]);


//     return (
//         <CartContext.Provider value={{ state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     )
// }


// v2

// import { useEffect, useReducer, useState } from "react"
// import CartContext, { cartReducer, cartInitState } from "./action-state"

// export function CartProvider({ children }: { children: React.ReactNode }) {
//     const [isClient, setIsClient] = useState(false);

//     const getInitState = () => {
//         if (isClient) {
//             const saved = localStorage.getItem("cart");
//             if (saved) {
//                 try {
//                     return JSON.parse(saved);
//                 }
//                 catch (e) {
//                     console.error("Error parsing cart from localStorage:", e);
//                 }
//             }
//         }
//         return cartInitState;
//     }

//     const [state, dispatch] = useReducer(cartReducer, getInitState());

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     useEffect(() => {
//         if (isClient) {
//             localStorage.setItem("cart", JSON.stringify(state));
//         }
//     }, [state, isClient]);

//     // Don't render until client-side hydration is complete
//     if (!isClient) {
//         return (
//             <CartContext.Provider value={{ state: cartInitState, dispatch }}>
//                 {children}
//             </CartContext.Provider>
//         );
//     }

//     return (
//         <CartContext.Provider value={{ state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     )
// }



//v3



import { useEffect, useReducer, useState } from "react"
import CartContext, { cartReducer, cartInitState } from "./action-state"

export function CartProvider({ children }: { children: React.ReactNode }) {
    // Track if we're on the client side
    const [isClient, setIsClient] = useState(false);

    // Always start with the initial state (empty cart)
    const [state, dispatch] = useReducer(cartReducer, cartInitState);
    const [isHydrated, setIsHydrated] = useState(false);

    // This effect runs only on the client side after hydration
    useEffect(() => {
        setIsClient(true);

        // Load cart data from localStorage
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                const parsedState = JSON.parse(saved);
                // Tell the reducer to replace everything with the saved data
                dispatch({ type: 'SET_CART', payload: parsedState });
            } catch (e) {
                console.error("Error parsing cart from localStorage:", e);
            }
        }
        setIsHydrated(true);
    }, []); // Empty dependency array - run once after mount

    // Save to localStorage whenever state changes (but only after hydration)
    useEffect(() => {
        if (isHydrated && isClient) {
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }, [state, isHydrated, isClient]);

    // Prevent hydration mismatch by rendering a consistent initial state
    // until the client-side code takes over
    return (
        <CartContext.Provider value={{
            state,
            dispatch,
            isHydrated: isHydrated && isClient
        }}>
            {children}
        </CartContext.Provider>
    )
}