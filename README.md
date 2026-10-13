# 我的 IP

查詢目前的對外 IP 位址、ISP、ASN、所在地與瀏覽器資訊。類似 myip.com.tw。

正式網址：<https://ip.3mi.ai/>

## 結構

```
public/          # 靜態頁面，也是部署目錄
  index.html     # 單頁介面，載入後打 /json 取資料
functions/       # Cloudflare Pages Functions
  _lib.js        # 從 CF-Connecting-IP 與 request.cf 組出資訊
  index.js       # curl / wget 打 / 只回 IP，瀏覽器放行到 index.html
  json.js        # /json 回完整 JSON
```

IP 與地理位置都來自 Cloudflare 邊緣（`request.cf`），不打第三方 GeoIP API。

## 用法

```sh
curl ip.3mi.ai        # 只回 IP
curl ip.3mi.ai/json   # 完整 JSON
```

## 開發

```sh
npx wrangler pages dev public
```

本機的 `request.cf` 是 wrangler 模擬值。

## 部署

```sh
npx wrangler pages deploy public --project-name=ip-3mi
```
