import { auth } from "@/auth";
import { getGreeting } from "@/lib/functions";
import type { Metadata } from "next";
import DashboardStats from "../components/Dashboard/DashboardStats";
import DashboardTabs from "../components/Dashboard/DashboardTabs";

export async function generateMetadata(): Promise<Metadata> {
  const session = await auth();
  const firstName = session?.user?.firstName || "User";
  const lastName = session?.user?.lastName || "";
  const fullName = lastName ? `${firstName} ${lastName}` : firstName;

  return {
    title: `${fullName} - Dashboard`,
    description: "Track your referrals and manage your books",
  };
}

export default async function DashboardPage() {
  const session = await auth();
  const userName = session?.user?.firstName || "User";
  const greeting = getGreeting();

  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <DashboardStats greeting={greeting} userName={userName} />

        <DashboardTabs />
      </div>
    </div>
  );
}
