import { Menu } from "@/interfaces/menu";
import { Post } from "@/interfaces/post";
import posts from "../../mock-data/posts.json";
import menus from "../../mock-data/menu-items.json";

// site url
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Get catering menu items
 */
export async function getMenus(): Promise<Menu[]> {
  return menus as Menu[];
}

/**
 * Get posts
 */

export async function getPosts(): Promise<Post[]> {
  return posts as Post[];
}
