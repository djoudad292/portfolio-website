'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

/**
 * Third-party analytics.
 *
 * Mounted only on a real host. Two reasons:
 *  - Cloudflare's beacon validates the page origin against its own token
 *    config, so on localhost it fails the CORS preflight and logs an error on
 *    every single page load, which buries real console output during work.
 *  - Preview and local traffic should not be counted as visitors.
 */
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1'])

export function Analytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!LOCAL_HOSTS.has(window.location.hostname))
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "9320c98188e747f0ad98120cbbba7351"}'
        strategy="afterInteractive"
      />
      <Script
        src="https://shown.io/metrics/On9xljgK9e"
        strategy="afterInteractive"
      />
    </>
  )
}