import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
export async function GET(ctx: APIContext) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const site = ctx.site?.toString().replace(/\/$/, '') ?? 'https://jessiegao.com';
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = notes.map(n => `<item><title>${esc(n.data.title)}</title><link>${site}/notes/${n.id}</link><guid>${site}/notes/${n.id}</guid><pubDate>${n.data.date.toUTCString()}</pubDate><description>${esc(n.data.description)}</description></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Jessie Gao — Notes</title><link>${site}/notes</link><description>Running a consumer brand with an AI team: the job, the old way, the AI way, what it cost, what broke.</description><language>en-gb</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
