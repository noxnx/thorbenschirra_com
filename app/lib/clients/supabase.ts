import { createClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

export async function supabaseClient() {
    return createClient(
        "https://wfgiynuoemaseachwdhy.supabase.co",
        "sb_publishable_HehSOGTi7sEPZdDIGMb_3g_MiAwugPD"
    )
}

export async function supabaseBrowserClient() {
    return createBrowserClient(
        "https://wfgiynuoemaseachwdhy.supabase.co",
        "sb_publishable_HehSOGTi7sEPZdDIGMb_3g_MiAwugPD"
    )
}