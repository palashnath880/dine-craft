import { Menu } from "@/interfaces/menu";
import { Post } from "@/interfaces/post";

// site url
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Get catering menu items
 */
export async function getMenus(): Promise<Menu[]> {
  const res = await fetch(`${BASE_URL}/api/our-menu`);
  const data = await res.json();
  return data;
}

/**
 * Get posts
 */

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/api/blogs`);
  const data = await res.json();
  return data;
}
