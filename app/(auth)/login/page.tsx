import LoginForm from "@/app/components/LoginForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login - ReferBook",
  description: "Access your account and read your favorite ebooks",
};

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return <LoginForm />;
};

export default LoginPage;
