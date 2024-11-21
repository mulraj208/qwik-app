import type enUS from '../../../../translations/en-US.json'

// In this example, english has the most support, so it has all the keys
export type IntlMessageIDs = keyof typeof enUS

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: IntlMessageIDs
    }
  }
}
