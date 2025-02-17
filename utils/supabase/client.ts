import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_API_KEY are required."
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const supabase = createClient(supabaseUrl, supabaseKey);