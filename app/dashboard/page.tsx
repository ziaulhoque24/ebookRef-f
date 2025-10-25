import { auth } from "@/auth";
import { getGreeting } from "@/lib/functions";
import type { Metadata } from "next";
import CreditInstructions from "../components/Dashboard/CreditInstructions";
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
      <div className='container mx-auto px-4 sm:px-6 py-6 sm:py-8'>
        <DashboardStats greeting={greeting} userName={userName} />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6'>
          <div className='lg:col-span-2 order-1'>
            <DashboardTabs />
          </div>
          <div className='lg:col-span-1 order-2'>
            <CreditInstructions />
          </div>
        </div>
      </div>
    </div>
  );
}
