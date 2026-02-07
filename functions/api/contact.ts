import { Hono } from "hono";
import type { Env } from "../../src/types/env";

type Variables = Record<string, never>;

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.post("/api/contact", async (c) => {
  const body = await c.req.json<{ name: string; email: string; message: string }>();

  if (!body.name || !body.email || !body.message) {
    return c.json({ error: "All fields are required." }, 400);
  }

  // TODO: Insert into D1 once database is provisioned
  // const db = drizzle(c.env.DB);
  // await db.insert(contactSubmissions).values({ ... });

  // TODO: Send email notification (MailChannels, Resend, etc.)

  console.log("Contact form submission:", body);

  return c.json({ success: true });
});

export const onRequest = app.fetch;
