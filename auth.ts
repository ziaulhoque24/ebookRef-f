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
        let user = null;
        user = await fetch("http://localhost:3001/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log("Login response data:", data);
              return {
                id: data.id,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                referralCode: data.referralCode,
                accessToken: data.accessToken,
              };
            }
            return null;
          })
          .catch((err) => {
            console.log(err);
          });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        console.log("Authorized user:", user);
        return user;
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
