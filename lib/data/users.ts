import { supabase } from "@/utils/supabase/client";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }

  return data;
}
