import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    referralCode?: string | null;
    accessToken?: string | null;
  }

  interface Session {
    user: {
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      referralCode?: string | null;
    } & DefaultSession["user"];
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    referralCode?: string | null;
    accessToken: string;
  }
}
