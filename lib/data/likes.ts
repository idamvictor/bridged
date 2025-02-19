import { supabase } from "@/utils/supabase/client";

export interface Like {
  id: string;
  post_id: string;
  user_id: string;
}

export async function getLikes(postId: string): Promise<Like[]> {
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId);

  if (error) {
    console.error("Error fetching likes:", error);
    return [];
  }

  return data;
}

export async function toggleLike(
  postId: string,
  userId: string
): Promise<boolean> {
  const { data: existingLike, error: fetchError } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    console.error("Error fetching like:", fetchError);
    return false;
  }

  if (existingLike) {
    const { error: deleteError } = await supabase
      .from("likes")
      .delete()
      .eq("id", existingLike.id);

    if (deleteError) {
      console.error("Error deleting like:", deleteError);
      return false;
    }
  } else {
    const { error: insertError } = await supabase
      .from("likes")
      .insert([{ post_id: postId, user_id: userId }]);

    if (insertError) {
      console.error("Error creating like:", insertError);
      return false;
    }
  }

  return true;
}
