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



// import { useEffect, useReducer, useState, useCallback } from "react"
// import CartContext, { cartReducer, cartInitState } from "./action-state"

// export function CartProvider({ children }: { children: React.ReactNode }) {
//     // Track mounting state more reliably
//     const [mounted, setMounted] = useState(false);

//     // Initialize with empty state always, regardless of environment
//     const [state, dispatch] = useReducer(cartReducer, cartInitState);

//     // Track whether we've loaded from localStorage
//     const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);

//     // Enhanced mount detection
//     useEffect(() => {
//         // Double-check we're actually in the browser
//         if (typeof window !== 'undefined') {
//             setMounted(true);

//             // Use requestAnimationFrame to ensure DOM is fully ready
//             requestAnimationFrame(() => {
//                 try {
//                     const saved = localStorage.getItem("cart");
//                     if (saved) {
//                         const parsedState = JSON.parse(saved);
//                         dispatch({ type: 'SET_CART', payload: parsedState });
//                     }
//                 } catch (error) {
//                     console.error("Failed to load cart from localStorage:", error);
//                     // Clear corrupted data
//                     localStorage.removeItem("cart");
//                 } finally {
//                     setHasLoadedFromStorage(true);
//                 }
//             });
//         }
//     }, []); // Only run once after mount

//     // Debounced save function to prevent excessive localStorage writes
//     const saveToStorage = useCallback((cartState: typeof state) => {
//         if (mounted && hasLoadedFromStorage) {
//             try {
//                 localStorage.setItem("cart", JSON.stringify(cartState));
//             } catch (error) {
//                 console.error("Failed to save cart to localStorage:", error);
//             }
//         }
//     }, [mounted, hasLoadedFromStorage]);

//     // Save to localStorage with debouncing
//     useEffect(() => {
//         if (!mounted || !hasLoadedFromStorage) return;

//         // Debounce the save operation
//         const timeoutId = setTimeout(() => {
//             saveToStorage(state);
//         }, 300); // Wait 300ms after last change

//         return () => clearTimeout(timeoutId);
//     }, [state, saveToStorage, mounted, hasLoadedFromStorage]);

//     // Render a minimal context during SSR and initial load
//     if (!mounted) {
//         return (
//             <CartContext.Provider value={{
//                 state: cartInitState,
//                 dispatch: () => { }, // No-op during SSR
//                 isHydrated: false
//             }}>
//                 {children}
//             </CartContext.Provider>
//         );
//     }

//     // Full functionality after mount and storage load
//     return (
//         <CartContext.Provider value={{
//             state,
//             dispatch,
//             isHydrated: hasLoadedFromStorage
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// }




// v4 (monitoring system for tracking the possible "useReducer" error on server side rendering)


import { useEffect, useReducer, useState, useCallback, useRef } from "react"
import CartContext, { cartReducer, cartInitState } from "./action-state"

export function CartProvider({ children }: { children: React.ReactNode }) {
    // Tracking state for debugging
    const [mounted, setMounted] = useState(false);
    const [state, dispatch] = useReducer(cartReducer, cartInitState);
    const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);

    // Debugging refs to track render cycles and state changes
    const renderCount = useRef(0);
    const dispatchCount = useRef(0);
    const lastAction = useRef<string>("none");
    const initializationAttempts = useRef(0);

    // Enhanced logging function
    const logDebug = useCallback((message: string, data?: any) => {
        const timestamp = new Date().toISOString();
        console.log(`🛒 [CartProvider ${timestamp}] ${message}`, data || "");
    }, []);

    // Wrapped dispatch with monitoring
    const monitoredDispatch = useCallback((action: any) => {
        try {
            dispatchCount.current += 1;
            lastAction.current = action.type || "unknown";

            logDebug(`Dispatch #${dispatchCount.current}: ${action.type}`, action);

            // Check for potential issues before dispatching
            if (typeof action !== 'object' || !action.type) {
                throw new Error(`Invalid action object: ${JSON.stringify(action)}`);
            }

            dispatch(action);
            logDebug(`✅ Dispatch successful: ${action.type}`);

        } catch (error) {
            console.error(`❌ Dispatch failed for action: ${lastAction.current}`, error);
            logDebug("Current state before failed dispatch:", state);
            throw error; // Re-throw to trigger error boundary
        }
    }, [logDebug, state]);

    // Monitor component lifecycle and renders
    useEffect(() => {
        renderCount.current += 1;
        logDebug(`Render #${renderCount.current} - Mounted: ${mounted}, Loaded: ${hasLoadedFromStorage}`);

        // Log current environment details
        if (renderCount.current === 1) {
            logDebug("Environment check:", {
                isClient: typeof window !== 'undefined',
                hasLocalStorage: typeof localStorage !== 'undefined',
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
                url: typeof window !== 'undefined' ? window.location.href : 'SSR'
            });
        }
    });

    // Enhanced mount detection with comprehensive logging
    useEffect(() => {
        if (typeof window !== 'undefined') {
            initializationAttempts.current += 1;
            logDebug(`🚀 Initialization attempt #${initializationAttempts.current}`);

            try {
                setMounted(true);
                logDebug("✅ Component mounted successfully");

                // Use requestAnimationFrame to ensure DOM is ready
                requestAnimationFrame(() => {
                    try {
                        logDebug("🔍 Attempting to load from localStorage...");
                        const saved = localStorage.getItem("cart");

                        if (saved) {
                            logDebug("📦 Found saved cart data", { dataLength: saved.length });
                            const parsedState = JSON.parse(saved);
                            logDebug("✅ Successfully parsed cart data", parsedState);

                            monitoredDispatch({ type: 'SET_CART', payload: parsedState });
                        } else {
                            logDebug("ℹ️ No saved cart data found - starting with empty cart");
                        }
                    } catch (parseError) {
                        console.error("❌ Failed to parse cart data from localStorage:", parseError);
                        logDebug("🧹 Clearing corrupted localStorage data");
                        localStorage.removeItem("cart");
                    } finally {
                        setHasLoadedFromStorage(true);
                        logDebug("✅ Storage loading process completed");
                    }
                });

            } catch (mountError) {
                console.error("❌ Error during component mount:", mountError);
                logDebug("Mount error details:", mountError);
            }
        } else {
            logDebug("⚠️ Window not available - running in SSR mode");
        }
    }, []); // Only run once after mount

    // Enhanced save to storage with monitoring
    const saveToStorage = useCallback((cartState: typeof state) => {
        if (mounted && hasLoadedFromStorage) {
            try {
                const serializedState = JSON.stringify(cartState);
                logDebug("💾 Saving cart to localStorage", {
                    itemCount: cartState.length,
                    dataSize: serializedState.length
                });

                localStorage.setItem("cart", serializedState);
                logDebug("✅ Successfully saved cart to localStorage");

            } catch (saveError) {
                console.error("❌ Failed to save cart to localStorage:", saveError);
                logDebug("Save error details:", saveError);
            }
        } else {
            logDebug(`⏳ Skipping save - Mounted: ${mounted}, Loaded: ${hasLoadedFromStorage}`);
        }
    }, [mounted, hasLoadedFromStorage, logDebug]);

    // Monitor state changes with debounced saving
    useEffect(() => {
        if (!mounted || !hasLoadedFromStorage) {
            logDebug("⏳ Skipping state change handler - not ready yet");
            return;
        }

        logDebug("🔄 State changed, scheduling save...", {
            itemCount: state.length,
            lastAction: lastAction.current
        });

        // Debounce the save operation
        const timeoutId = setTimeout(() => {
            saveToStorage(state);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
            logDebug("⏹️ Save operation cancelled due to new state change");
        };
    }, [state, saveToStorage, mounted, hasLoadedFromStorage, logDebug]);

    // Log any unmounting for debugging
    useEffect(() => {
        return () => {
            logDebug("🔚 CartProvider unmounting", {
                renderCount: renderCount.current,
                dispatchCount: dispatchCount.current,
                lastAction: lastAction.current
            });
        };
    }, [logDebug]);

    // Render minimal context during SSR and initial load
    if (!mounted) {
        logDebug("🔄 Rendering SSR/initial state");
        return (
            <CartContext.Provider value={{
                state: cartInitState,
                dispatch: () => {
                    logDebug("⚠️ No-op dispatch called during SSR");
                },
                isHydrated: false
            }}>
                {children}
            </CartContext.Provider>
        );
    }

    // Full functionality after mount and storage load
    logDebug("🔄 Rendering full functionality state", {
        isHydrated: hasLoadedFromStorage,
        itemCount: state.length
    });

    return (
        <CartContext.Provider value={{
            state,
            dispatch: monitoredDispatch,
            isHydrated: hasLoadedFromStorage
        }}>
            {children}
        </CartContext.Provider>
    );
}