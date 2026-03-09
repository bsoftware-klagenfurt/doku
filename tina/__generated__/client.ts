import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '840f992d9146ac5e0493b76dda95666ac49356b8', queries,  });
export default client;
  