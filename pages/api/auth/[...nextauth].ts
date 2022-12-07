import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import clientPromise from "../../../utils/mongodb";

export enum UserRole {
    Admin = "Admin",
    User = "User"
}

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            (user as any).role = UserRole.User;
            return true;
        },
        async session({ session, token, user }) {
            (session?.user as any).role = (user as any).role;
            return session;
        },
    },
};

export default NextAuth(authOptions);
