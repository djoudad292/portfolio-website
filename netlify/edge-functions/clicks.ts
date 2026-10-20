import { getStore } from "https://esm.sh/@netlify/blobs@7.4.0";

export const config = { path: "/clicks/:token" };

const TOKEN = "k7m2x9qz4v8w";

export default async (_req: Request, context: { params: Record<string, string> }) => {
  if (context.params.token !== TOKEN) {
    return new Response("Not found", { status: 404 });
  }

  let rows: { id: string; to: string; ts: string; ip: string }[] = [];
  try {
    const store = getStore("clicks");
    const list = await store.list({ prefix: "" });
    for (const { key } of list.blobs) {
      const val = await store.get(key, { type: "json" });
      if (val) rows.push(val as { id: string; to: string; ts: string; ip: string });
    }
  } catch (e) {
    return new Response("Blobs error: " + (e as Error).message, { status: 500 });
  }
  rows.sort((a, b) => b.ts.localeCompare(a.ts));

  const trs = rows
    .map(
      (r) =>
        `<tr><td>${r.ts}</td><td>${r.to}</td><td>${r.id}</td><td>${r.ip}</td></tr>`,
    )
    .join("");

  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><title>Clicks</title>
<meta name="robots" content="noindex">
<style>body{font:14px/1.5 ui-monospace,monospace;margin:2rem}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:4px 10px;text-align:left}</style>
</head><body><h1>Link clicks (${rows.length})</h1>
<table><tr><th>Time (UTC)</th><th>Who</th><th>Link id</th><th>IP</th></tr>${trs}</table>
</body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
};
