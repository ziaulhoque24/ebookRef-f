import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "../../components/RegisterForm";

export const metadata = {
  title: "Register - ReferBook",
  description: "Create your account and start earning rewards",
};

const RegisterPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return <RegisterForm />;
};

export default RegisterPage;
