"use client";

import { useGetDashboardQuery } from "@/redux/feature/user/userApiSlice";
import { CheckCircle, Coins, TrendingUp, Users } from "lucide-react";
import ReferralLink from "./ReferralLink";

interface DashboardStatsProps {
  greeting: string;
  userName: string;
}

export default function DashboardStats({
  greeting,
  userName,
}: DashboardStatsProps) {
  const { data, isLoading, error } = useGetDashboardQuery();

  if (isLoading) {
    return (
      <div className='animate-pulse'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
          <div className='lg:col-span-2'>
            <div className='h-24 bg-gray-200 rounded'></div>
          </div>
          <div className='h-32 bg-gray-200 rounded-xl'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='h-32 bg-gray-200 rounded-xl'></div>
          <div className='h-32 bg-gray-200 rounded-xl'></div>
          <div className='h-32 bg-gray-200 rounded-xl'></div>
          <div className='h-32 bg-gray-200 rounded-xl'></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-red-50 border border-red-200 rounded-xl p-6 mb-8'>
        <h2 className='text-xl font-bold text-red-800 mb-2'>
          Error Loading Dashboard Data
        </h2>
        <p className='text-red-600'>Please try again later.</p>
      </div>
    );
  }

  if (!data) return null;

  const stats = [
    {
      title: "Total Referred Users",
      value: data.totalReferredUsers,
      icon: Users,
      color: "bg-blue-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Converted Users",
      value: data.convertedUsers,
      icon: CheckCircle,
      color: "bg-green-500",
      bgLight: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Conversion Rate",
      value: `${data.conversionRate}%`,
      icon: TrendingUp,
      color: "bg-purple-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Credits Earned",
      value: data.credits,
      icon: Coins,
      color: "bg-yellow-500",
      bgLight: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
        <div className='lg:col-span-2 flex flex-col justify-center'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
            {greeting}, {userName}!
          </h1>
          <p className='text-gray-600 text-lg'>
            Welcome to your dashboard. Track your referrals and manage your
            books.
          </p>
        </div>
        <div>
          <ReferralLink referralLink={data.referralLink} />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow'
          >
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium mb-2'>
                  {stat.title}
                </p>
                <p className='text-3xl font-bold text-gray-800'>{stat.value}</p>
              </div>
              <div className={`${stat.bgLight} p-4 rounded-lg`}>
                <stat.icon className={`w-8 h-8 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
