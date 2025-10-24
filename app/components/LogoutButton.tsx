"use client";

import { doSignOut } from "@/app/actions";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await doSignOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className='text-gray-600 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed'
      title='Logout'
    >
      <LogOut className='w-5 h-5' />
    </button>
  );
}
