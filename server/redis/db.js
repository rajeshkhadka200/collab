import { Client } from "redis-om";
const url = process.env.REDIS_HOST;
const client = new Client();
try {
  const res = await client.open(url);
  console.log("Connected to redis !");
} catch (error) {
  console.log("failed connecting redis", error);
}
export default client;
