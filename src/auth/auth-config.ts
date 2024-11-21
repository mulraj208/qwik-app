import config from "~/config/dw";

export const authConfig = {
    logger: console,
    clientId: config.CLIENT_ID,
    organizationId: config.ORGANIZATION_ID,
    redirectURI: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/callback`,
    proxy: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/mobify/proxy/api`,
    siteId: config.SITE_ID,
    shortCode: config.SHORT_CODE,
    locale: "en-US",
    currency: "USD"
}