"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/app/lib/supabase/browser-client";
import { LoginUser } from "@/app/types/user";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [visibility, setVisibility] = useState<"text" | "password">("password");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event?.currentTarget.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event?.currentTarget.value);
  }

  function handleVisibility() {
    if (visibility === "password") {
      setVisibility("text");
    } else {
      setVisibility("password");
    }
  }

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    const supabase = await getSupabaseBrowserClient();

    if (email === "" || password === "") {
      return alert(
        "email or password are emtpy"
      ); /* this has to be changed later on */
    }

    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      return {
        body: `An error occurred: ${error}`,
        status: 500,
      };
    } finally {
      router.push("/dashboard");
    }
  }
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center p-8 rounded-box border border-gray-200 space-y-8 w-1/3 shadow-md"
      >
        <h1 className="text-4xl font-semibold">Login</h1>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleEmail(event)
          }
          value={email}
          type="email"
          className="input bg-white border border-gray-200"
          placeholder="email "
        />
        <div className="input bg-white border border-gray-200">
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handlePassword(event)
            }
            value={password}
            type={visibility}
            className=""
            placeholder="password"
          />
          <button
            type="button"
            onClick={handleVisibility}
            className="cursor-pointer"
          >
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
