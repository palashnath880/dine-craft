import { Menu } from "@/interfaces/menu";
import { Post } from "@/interfaces/post";
import posts from "../../mock-data/posts.json";
import menus from "../../mock-data/menu-items.json";
import team_list from "../../mock-data/team-members.json";
import { TeamMember } from "@/interfaces/team-member";

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

/**
 * Get post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = (posts as Post[]).find((i) => i.slug === slug) || null;
  return post;
}

/**
 * Get team members
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  return team_list as TeamMember[];
}
