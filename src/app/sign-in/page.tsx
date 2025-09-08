// File: app/signin/page.tsx

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');


    const handleCredentialsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            });

            if (result?.error) {
                setError("نام کاربری/ایمیل یا پسورد نامعتبر است");
            } else if (result?.ok) {
                router.push(callbackUrl || '/');
                router.refresh();
            }
        } catch (error) {
            setError("An unexpected error occurred.");
        }
    };

    // Handler for the GitHub button
    const handleGitHubSignIn = () => {
        signIn('github');
    };

    return (
        <div className="max-w-[60%] my-10 mx-auto p-6 border border-neutral-300 "
        // style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}
        >
            <form onSubmit={handleCredentialsSubmit}>
                <h2>ورود</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="username">نام کاربری یا ایمیل</label>
                    <input
                        id="username"
                        className="border border-neutral-300 rounded-sm"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password">رمز عبور</label>
                    <input
                        id="password"
                        className="border border-neutral-300 rounded-sm"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>
                    ورود به سایت
                </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
                <span style={{ margin: '0 1rem', color: '#666' }}>یا</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
            </div>

            <button onClick={handleGitHubSignIn} style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px' }}>
                ورود با GitHub
            </button>
        </div>
    );
}