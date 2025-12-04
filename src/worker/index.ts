import { Hono } from "hono";
import { cors } from 'hono/cors'

const app = new Hono<{ Bindings: Env }>();
app.use('*', cors()) // 允许所有来源进行测试
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.get("/api/getInfo", (c) => c.json({ name: "GetInfo" }));

export default app;
