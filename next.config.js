const isProd = process.env.NODE_ENV === "production"

module.exports = {
  basePath: isProd ? "/zapps/4581931496271408314" : undefined,
  assetPrefix: isProd
    ? "https://zalo-miniapp.github.io/next-mini-app"
    : undefined,
}
