import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || "Invalid email or password");
          }

          const data = await response.json();

          return {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            referralCode: data.referralCode,
            accessToken: data.accessToken,
          };
        } catch (error) {
          console.error("Login error:", error);
          throw new Error(
            error instanceof Error ? error.message : "Invalid credentials."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.referralCode = user.referralCode;
        token.accessToken = user.accessToken as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.referralCode = token.referralCode as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
});
