'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Locale, locales } from '@/i18n/locale'
import { setLocale } from '@/i18n/actions'

export const LocaleToggle = () => {
  const locale = useLocale()
  const t = useTranslations('common.languageToggle')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onSelect = (next: Locale) => {
    if(next === locale || isPending) return
    startTransition(async () => {
      await setLocale(next)
      router.refresh()
    })
  }

  return (
    <div
      className='flex items-center rounded-lg border border-primary/30 text-xs font-bold overflow-hidden'
      role='group'
      aria-label={t('label')}
    >
      {locales.map((code) => (
        <button
          key={code}
          type='button'
          onClick={() => onSelect(code)}
          disabled={isPending}
          aria-pressed={locale === code}
          title={t(code)}
          className={`px-2 py-1 uppercase transition-colors
            ${locale === code ? 'bg-primary text-primary-content' : 'text-primary hover:bg-primary/10'}
          `}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export default LocaleToggle
