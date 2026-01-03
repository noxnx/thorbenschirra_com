"use client"

import { createBrowserClient } from "@supabase/ssr";
import type {SupabaseClient} from "@supabase/supabase-js";

type SupabaseSchema = Record<string, never>;

let client: SupabaseClient<SupabaseSchema> | null = null;

export async function getSupabaseBrowserClient() {
    if (client) {
        return client;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error ("missing supabase url or supabase anon key!");
    }

    client = createBrowserClient<SupabaseSchema>(supabaseUrl, supabaseAnonKey);
    return client;
}