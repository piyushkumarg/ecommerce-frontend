export const ITEMS_PER_PAGE = 12;

export function discountedPrice(item) {
  return Math.round(item.price * (1 - item.discountPercentage / 100), 2);
}

export const BASE_URL = "https://ecommerce-json-server.onrender.com";