import { ImageResponse } from 'next/og'

import { AUDIT_OFFER, PRICE_ANCHOR } from '@/lib/positioning'

/*
 * Social share card (1200x630).
 *
 * Palette and copy are pulled from the same design tokens as the site so the
 * card cannot drift from the pages it represents. It is deliberately static:
 * no request access, so Next prerenders it at build time instead of paying for
 * an edge invocation on every crawler hit.
 */

export const dynamic = 'force-static'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0c10',
          padding: '64px 72px',
          color: '#e8e6e1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '9999px',
              backgroundColor: '#eeaf2d',
            }}
          />
          <div style={{ fontSize: '19px', color: '#8a9099', letterSpacing: '3px' }}>
            DJAOUAD.IS-A.DEV
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-2px',
              maxWidth: '960px',
            }}
          >
            Your AI support agent should be measured before you trust it.
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-2px',
              color: '#eeaf2d',
              marginTop: '6px',
            }}
          >
            I build it that way.
          </div>
          <div
            style={{
              fontSize: '26px',
              lineHeight: 1.4,
              color: '#8a9099',
              maxWidth: '880px',
              marginTop: '26px',
            }}
          >
            Retrieval layers and agent loops on your existing Postgres estate, scored against
            your own documents before a single prompt is written.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1e2530',
            paddingTop: '24px',
            fontSize: '21px',
            color: '#8a9099',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                fontSize: '19px',
                color: '#0a0c10',
                backgroundColor: '#eeaf2d',
                borderRadius: '6px',
                padding: '7px 14px',
              }}
            >
              {`${AUDIT_OFFER.price} reliability audit`}
            </div>
          </div>
          <div style={{ color: '#e8e6e1' }}>{PRICE_ANCHOR}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}