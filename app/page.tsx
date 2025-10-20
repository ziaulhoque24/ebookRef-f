import { auth } from "@/auth";
import Image from "next/image";
import { doSignOut } from "./actions";

export default async function Home() {
  const session = await auth();
  const user = session?.user as
    | {
        id?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        referralCode?: string;
      }
    | null
    | undefined;

  const accessToken = session?.accessToken;

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />

        {user ? (
          <div className='text-left'>
            <h2 className='text-lg font-semibold mb-2'>Signed in as</h2>
            <ul className='font-mono text-sm space-y-1'>
              <li>
                <strong>Email:</strong> {user.email ?? "-"}
              </li>
              <li>
                <strong>Name:</strong>{" "}
                {`${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "-"}
              </li>
              <li>
                <strong>Referral:</strong> {user.referralCode ?? "-"}
              </li>
              <li>
                <strong>Access Token:</strong>
                {accessToken ?? "-"}
              </li>
            </ul>
            <form action={doSignOut} className='mt-4'>
              <button
                type='submit'
                className='btn-primary mt-2 inline-flex items-center px-4 py-2'
              >
                Sign out
              </button>
            </form>
          </div>
        ) : (
          <div className='text-center'>
            <p className='mb-4'>You are not signed in.</p>
            <a href='/login' className='text-sm underline'>
              Sign in
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
