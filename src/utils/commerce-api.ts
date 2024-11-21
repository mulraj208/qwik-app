import pkg from 'commerce-sdk-isomorphic/lib/index.cjs.js';
// @ts-ignore
const {ShopperBaskets, ShopperContexts, ShopperCustomers, ShopperExperience, ShopperGiftCertificates, ShopperLogin, ShopperOrders, ShopperProducts, ShopperPromotions, ShopperSearch, ShopperSeo} = pkg.default || pkg;

import config from '~/config/dw'
import {getAuthInstance} from "~/auth";
import {authConfig} from "~/auth/auth-config";

export const getApiClients = async () => {
    const auth = getAuthInstance(authConfig);
    const { access_token } = await auth.ready();
    const commerceApiConfig = {
        proxy: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/mobify/proxy/api`,
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        parameters: {
            clientId: config.CLIENT_ID,
            organizationId: config.ORGANIZATION_ID,
            shortCode: config.SHORT_CODE,
            siteId: config.SITE_ID,
            locale: "en-US",
            currency: "USD",
        },
        throwOnBadResponse: true
    }

    return {
        shopperBaskets: new ShopperBaskets(commerceApiConfig),
        shopperContexts: new ShopperContexts(commerceApiConfig),
        shopperCustomers: new ShopperCustomers(commerceApiConfig),
        shopperExperience: new ShopperExperience(commerceApiConfig),
        shopperGiftCertificates: new ShopperGiftCertificates(commerceApiConfig),
        shopperLogin: new ShopperLogin(commerceApiConfig),
        shopperOrders: new ShopperOrders(commerceApiConfig),
        shopperProducts: new ShopperProducts(commerceApiConfig),
        shopperPromotions: new ShopperPromotions(commerceApiConfig),
        shopperSearch: new ShopperSearch(commerceApiConfig),
        shopperSeo: new ShopperSeo(commerceApiConfig)
    }
}
