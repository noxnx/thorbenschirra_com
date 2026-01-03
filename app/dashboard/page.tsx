import Link from "next/link";
import Header from "../components/Header";
import { createSupabaseServerClient } from "../lib/supabase/server-client";

export default async function dashboard() {
  const supabase = await createSupabaseServerClient();

  const user = await supabase.auth.getUser();
  console.log("user: ", user);

  return (
    <div className="">
      <Header />
      <div className="flex flex-col mx-20 space-y-8">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <div className="w-2/3">
          <div className="flex flex-row justify-between border-b py-1.5">
            <h2 className="text-2xl font-semibold">Statistics</h2>
          </div>
        </div>
        <div className="w-2/3 space-y-8">
          <div className="flex flex-row justify-between border-b py-1.5">
            <h2 className="text-2xl font-semibold">Blogposts</h2>
            <Link href="/create_blogpost" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create a new blogpost
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
