import client from "../client";

export async function getGenre() {
  const response = await client.get("/genre");
  return response.data;
}
