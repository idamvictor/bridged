import { supabase } from "@/utils/supabase/client";

export interface Post {
  id: string;
  user_id: string;
  content: string;
  image_url?: string;
  timestamp: string;
  sponsored?: boolean;
}

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data;
}

export async function createPost(
  post: Omit<Post, "id" | "timestamp">
): Promise<Post | null> {
  const { data, error } = await supabase.from("posts").insert([post]).select();

  if (error) {
    console.error("Error creating post:", error);
    return null;
  }

  return data[0];
}

export async function deletePost(id: string): Promise<boolean> {
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error("Error deleting post:", error);
    return false;
  }

  return true;
}
