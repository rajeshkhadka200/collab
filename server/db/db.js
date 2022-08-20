import { Client } from "redis-om";
const url =
  "redis://collab-user:CollabDB-123$$$@redis-14175.c11.us-east-1-3.ec2.cloud.redislabs.com:14175";

const client = new Client();
await client.open(url);
export default client;
