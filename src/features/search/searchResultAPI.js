import { BASE_URL } from "../../app/constants";
export function fetchProductsBySearchQuery(searchQuery) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${BASE_URL}/products?q=${searchQuery}`);
    const data = await response.json();
    resolve({ data });
  });
}
