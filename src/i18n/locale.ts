export const locales = ['fi', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fi'
export const localeCookieName = 'PONKELI_LOCALE'

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value)
