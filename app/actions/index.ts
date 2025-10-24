"use server";

import { signIn, signOut } from "@/auth";

export async function doSignOut() {
  await signOut();
}

export async function login(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function register(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const referralCode = formData.get("referralCode") as string;

    const body: any = {
      firstName,
      lastName,
      email,
      password,
    };

    if (referralCode) {
      body.referralCode = referralCode;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData?.message || "Registration failed";
      return {
        error: {
          message: errorMessage,
        },
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      error: {
        message: error instanceof Error ? error.message : "Registration failed",
      },
    };
  }
}
