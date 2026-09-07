
import { type NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig = {
  cacheComponents: true,
  experimental: {
    // The whole site is dynamic (locale is read from a cookie in the root
    // layout), so per-page instant-navigation validation is just noise -
    // only validate routes that explicitly opt in via `export const instant`.
    instantInsights: {
      validationLevel: 'manual-warning'
    }
  },
} satisfies NextConfig

export default withNextIntl(nextConfig)
