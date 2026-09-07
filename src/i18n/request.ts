import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

import { defaultLocale, isLocale, localeCookieName } from './locale'
import { mergeMessages } from './messages'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get(localeCookieName)?.value
  const locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale

  const [appMessages, componentMessages] = await Promise.all([
    import(`../../messages/app/${locale}.json`),
    import(`../../messages/components/${locale}.json`)
  ])

  return {
    locale,
    messages: mergeMessages(appMessages.default, componentMessages.default)
  }
})
