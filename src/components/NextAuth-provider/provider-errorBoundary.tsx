"use client"

// import { ErrorBoundary } from "react-error-boundary";
// import { ReactNode } from 'react';
// import type { ErrorInfo } from "react";

// interface ErrorFallbackProps {
//     error: Error;
//     resetErrorBoundary: () => void;
// }

// // Error fallback component
// function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <div className="text-center p-4">
//                 <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
//                 <p className="text-gray-600 mb-4">
//                     {error.message || 'Please refresh the page to try again.'}
//                 </p>
//                 <div className="space-x-2">
//                     <button
//                         onClick={resetErrorBoundary}
//                         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
//                     >
//                         Try Again
//                     </button>
//                     <button
//                         onClick={() => window.location.reload()}
//                         className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                     >
//                         Refresh Page
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Error handler function
// function handleError(error: Error, errorInfo: ErrorInfo) {
//     console.error("Context Provider Error:", error, errorInfo);
// }


// // Main wrapper component
// interface ProviderErrorBoundaryProps {
//     children: ReactNode;
//     fallback?: ReactNode;
// }

// export default function ProviderErrorBoundary({ children, fallback }: ProviderErrorBoundaryProps) {
//     return (
//         <ErrorBoundary
//             FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
//             onError={handleError}
//             onReset={() => {
//                 // Optionally clear any cached data or reset app state
//                 if (typeof window !== 'undefined') {
//                     localStorage.removeItem('cart');
//                 }
//             }}
//         >
//             {children}
//         </ErrorBoundary>
//     );
// }


// v2


import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from 'react';
import type { ErrorInfo } from "react";

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

// Enhanced error fallback component with more details
function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
    // Log additional debugging information
    console.log("=== ERROR BOUNDARY TRIGGERED ===");
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
    console.log("Current URL:", window.location.href);
    console.log("User agent:", navigator.userAgent);
    console.log("Current time:", new Date().toISOString());
    console.log("Local storage keys:", Object.keys(localStorage));
    console.log("=== END ERROR DETAILS ===");

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-center p-6 max-w-md">
                <h2 className="text-xl font-semibold mb-2 text-red-700">Application Error Detected</h2>
                <p className="text-gray-600 mb-4">
                    {error.message || 'An unexpected error occurred'}
                </p>

                {/* Show additional error details in development */}
                {process.env.NODE_ENV === 'development' && (
                    <details className="mb-4 text-left">
                        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                            Technical Details (Development Only)
                        </summary>
                        <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono">
                            <p><strong>Error:</strong> {error.name}</p>
                            <p><strong>URL:</strong> {window.location.pathname}</p>
                            <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
                        </div>
                    </details>
                )}

                <div className="space-x-2">
                    <button
                        onClick={resetErrorBoundary}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        </div>
    );
}

// Enhanced error handler function with detailed logging
function handleError(error: Error, errorInfo: ErrorInfo) {
    // Create a comprehensive error report
    const errorReport = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
        },
        componentStack: errorInfo.componentStack,
        localStorage: Object.keys(localStorage),
        sessionStorage: Object.keys(sessionStorage),
    };

    console.group("🚨 APPLICATION ERROR REPORT");
    console.error("Error occurred:", error);
    console.log("Full error report:", errorReport);
    console.log("Component stack:", errorInfo.componentStack);
    console.groupEnd();

    // In a real application, you might send this to an error tracking service
    // Example: Sentry.captureException(error, { extra: errorReport });
}

// Main wrapper component with enhanced monitoring
interface ProviderErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export default function ProviderErrorBoundary({ children, fallback }: ProviderErrorBoundaryProps) {
    return (
        <ErrorBoundary
            FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
            onError={handleError}
            onReset={() => {
                console.log("🔄 Error boundary reset triggered");
                console.log("Clearing localStorage cart data...");

                // Clear potentially corrupted data
                if (typeof window !== 'undefined') {
                    try {
                        localStorage.removeItem('cart');
                        console.log("✅ Cart data cleared successfully");
                    } catch (clearError) {
                        console.error("❌ Failed to clear cart data:", clearError);
                    }
                }
            }}
        >
            {children}
        </ErrorBoundary>
    );
}