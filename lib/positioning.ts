/**
 * Single source of truth for the site's positioning and commercial anchor.
 *
 * Change these two values and the whole site follows. Everything else that
 * repeats the positioning line or the price band should import from here so
 * there is no second copy to drift.
 */

// The positioning statement. Used verbatim on the homepage hero, the page
// metadata and the OG copy.
export const POSITIONING =
  "AI systems engineer. I build the agent, the retrieval layer that feeds it, and the production application around it."

// Public price band for a full AI system build. This is the number prospects
// see above the fold on the pricing section.
//
// HISTORY (for easy revert): the previous anchor was "$800 - $1,500", which
// priced the work as maintenance rather than a system build. Reverting means
// changing this constant only.
export const PRICE_ANCHOR = "$4,000 - $12,000"

export const PRICE_ANCHOR_NOTE =
  "depending on scope. Retrieval quality, agent tooling, and the application around it all move the number."

// Real measured numbers. Only claim what the harness actually computes.
export const RETRIEVAL_F1 = "93.8%"
export const RETRIEVAL_PRECISION = "88.2"
export const RETRIEVAL_RECALL = "100"
export const RETRIEVAL_THRESHOLD = "0.35"