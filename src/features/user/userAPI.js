import { BASE_URL } from "../../app/constants";

export function fetchSignedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/orders/?user.id=${userId}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchSignedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/users/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
