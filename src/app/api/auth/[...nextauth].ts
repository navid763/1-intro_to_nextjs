import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!, // The "!" symbol next to process.env tells TypeScript that we are certain these values will exist at runtime.
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
})