import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CartClient from "../components/Cart/CartClient";

export default async function CartPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <CartClient />;
}
