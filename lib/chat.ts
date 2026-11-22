/**
 * The support agent endpoint behind the "Ask anything" command palette.
 *
 * These two constants previously lived in components/console/data.ts, which was
 * part of an unreachable console UI. The chat integration itself works and is
 * still wired to the palette, so the endpoint moved here rather than being
 * deleted with the rest of that module.
 */
export const COMPANY_ID = 'djaouad-portfolio'
export const CHAT_API_BASE = 'https://ai-support-backend-nu.vercel.app'
export const CHAT_URL = `${CHAT_API_BASE}/widget/chat`