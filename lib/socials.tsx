export const email = "contact@djaouad.is-a.dev"

export const socials = [
  { label: "GitHub", href: "https://github.com/djoudad292" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/djaouad-frih" },
  { label: "Email", href: `mailto:${email}` },
]

// WhatsApp direct channel.
//
// wa.me/<number> opens a chat in WhatsApp — web or app — without the visitor
// having to save the number first, which is the point: it removes the "save
// contact, then find the chat" step that kills cold traffic on mobile.
// `?text=` prefills the composer so the visitor never starts from a blank box.
export const WHATSAPP_NUMBER = "213780688125"

export const WHATSAPP_TEXT =
  "Hi Djaouad, I saw your AI receptionist demo and would like the $900 retrieval audit."

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`
