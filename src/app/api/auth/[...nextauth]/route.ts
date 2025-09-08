import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
    }
}



// تعریف تنظیمات NextAuth
const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Test User" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const user = { id: "1", name: "Test User", email: "test@example.com", password: "password123" };

                // Check if the credentials match our mock user
                if ((credentials?.username === user.name || credentials?.username === user.email) && credentials?.password === user.password) {
                    // If they match, return the user object (without the password)
                    // Any object returned will be saved in the `user` property of the JWT.
                    const { password, ...userWithoutPassword } = user;
                    return userWithoutPassword;
                } else {
                    return null; // if username,email or password didn't match then return null
                }
            }
        })
    ],
    callbacks: {
        // این callback زمانی فراخوانی می‌شود که session ایجاد می‌شود
        async session({ session, token }) {
            // اطلاعات اضافی از token به session منتقل می‌کنیم
            if (session?.user && token?.sub) {
                session.user.id = token.sub
            }
            return session
        },
        // این callback برای مدیریت JWT token استفاده می‌شود
        async jwt({ user, token }) {
            // اگر user وجود داشته باشد، یعنی اولین بار login می‌کند
            if (user) {
                token.uid = user.id
            }
            return token
        },
    },
    pages: {
        // می‌توانید صفحات سفارشی برای login/error تعریف کنید
        signIn: '/sign-in'
        // error: '/auth/error', 
    },
})

// in Next.js 13+ App Router we need to import both GET and POST
export { handler as GET, handler as POST }