"use server"

import { supabaseClient } from "@/app/lib/clients/supabase";
import { LoginUser } from "@/app/types/user";
import { cookies } from "next/headers";

const supabase = await supabaseClient();

export async function loginUser(user: LoginUser) {
    const cookieStore = await cookies();

    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })

        if (error) {
            return `An error occurred: ${error.message}`
        }

        cookieStore.set({
            name: "authCookie",
            value: data.session.access_token,
            httpOnly: true,
            path: '/',
        });

        return {
            body: "successful login",
            status: 200
        }
    } catch (error) {
        return {
            body: `An error occurred: ${error}`,
            status: 500
        }
    }
}