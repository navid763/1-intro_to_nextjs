"use client"
import NextAuth from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ children }: { children: React.ReactNode }) {
    return <SessionProvider >{children}</SessionProvider>
}