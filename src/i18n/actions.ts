'use server'

import { cookies } from 'next/headers'

import { Locale, localeCookieName } from './locale'

export const setLocale = async (locale: Locale) => {
  const cookieStore = await cookies()
  cookieStore.set(localeCookieName, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })
}
