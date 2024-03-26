import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: AuthOptions = {
    pages: {
        signIn: '/dashboard/login',
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            return { ...token, ...user };
        },
        session: async ({ session, token }: { session: any, token: any }) => {
            session.user = token;
            return session;
        },
    },
    providers: [CredentialsProvider({
        name: "credentials",
        credentials: {
            token: { label: 'Token', type: 'text' },
        },
        async authorize(credentials: any) {
            if (credentials == null) return null
            const token = credentials["token"]
            const user = { id: "0", email: credentials["email"] }
            if (user) {
                return { ...user, token }
            }

            return null
        },
    })]
}

export default NextAuth(authOptions)