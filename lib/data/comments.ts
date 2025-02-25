import { supabase } from "@/utils/supabase/client";

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  timestamp: string;
  author_name: string;
  author_avatar: string;
}

export async function getComments(postId: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("post_comment")
    .select("*")
    .eq("post_id", postId)
    .order("timestamp", { ascending: true });

  if (error) {
    console.error("Error fetching comments:", error);
    return [];
  }

  return data;
}

export async function createComment(
  comment: Omit<Comment, "id" | "timestamp">
): Promise<Comment | null> {
  const { data, error } = await supabase
    .from("post_comment")
    .insert([comment])
    .select();

  if (error) {
    console.error("Error creating comment:", error);
    return null;
  }

  return data[0];
}
