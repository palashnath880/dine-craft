import { Menu } from "@/interfaces/menu";

// site url
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Get catering menu items
 */
export async function getMenus(): Promise<Menu[]> {
  const res = await fetch(`${BASE_URL}/api/our-menu`);
  const data = await res.json();
  return data;
}
