import client from "../client";

export async function getPulisher() {
  const response = await client.get("/publisher");
  return response.data;
}
