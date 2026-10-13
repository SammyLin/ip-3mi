import { info, noStore } from './_lib.js'

export function onRequest({ request }) {
  return Response.json(info(request), { headers: noStore })
}
