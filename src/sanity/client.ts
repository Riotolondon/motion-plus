import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6x5ydufh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});