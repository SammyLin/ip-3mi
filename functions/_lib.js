// request.cf 只有在 Cloudflare 邊緣才有;本機 dev 會是 mock 值
export function info(request) {
  const cf = request.cf || {}
  const ip = request.headers.get('cf-connecting-ip') || ''
  return {
    ip,
    version: ip.includes(':') ? 6 : 4,
    country: cf.country || null,
    region: cf.region || null,
    city: cf.city || null,
    postalCode: cf.postalCode || null,
    latitude: cf.latitude || null,
    longitude: cf.longitude || null,
    timezone: cf.timezone || null,
    asn: cf.asn || null,
    isp: cf.asOrganization && cf.asOrganization !== 'N/A' ? cf.asOrganization : null,
    colo: cf.colo || null,
    httpProtocol: cf.httpProtocol || null,
    tlsVersion: cf.tlsVersion || null,
    userAgent: request.headers.get('user-agent') || null,
  }
}

export const noStore = { 'cache-control': 'no-store', 'access-control-allow-origin': '*' }
