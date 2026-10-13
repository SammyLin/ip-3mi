import { info, noStore } from './_lib.js'

// curl ip.3mi.ai → 只回 IP;瀏覽器 → 靜態 index.html
const CLI = /^(curl|wget|httpie|xh|fetch|libfetch|aria2|powershell)/i

export function onRequest({ request, next }) {
  if (!CLI.test(request.headers.get('user-agent') || '')) return next()
  return new Response(info(request).ip + '\n', { headers: { ...noStore, 'content-type': 'text/plain; charset=utf-8' } })
}
