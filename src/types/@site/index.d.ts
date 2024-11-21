import type { SetupServerApi } from 'msw/node'

declare namespace SitePreferencesApp {
  type Global = {
    customerServiceEmail: string
  } & Record<string, null>
  type Home = {
    testField: number
    countryCode: string
  } & Record<string, null>

  type Page<T> = T & Global
}

declare global {
  // eslint-disable-next-line no-var
  var server: SetupServerApi
}
