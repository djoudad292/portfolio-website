import { getStore } from "https://esm.sh/@netlify/blobs@7.4.0";

export const config = { path: "/go/:id" };

const LEADS: Record<string, { to: string; url: string }> = {
  "795": { to: "office@wavect.io", url: "https://djaouad.is-a.dev/work" },
  "796": { to: "info@twodotzero.agency", url: "https://djaouad.is-a.dev/work" },
  "798": { to: "hello@softgen.co.uk", url: "https://djaouad.is-a.dev/work" },
  "799": { to: "info@nexusdigitalgroup.net", url: "https://djaouad.is-a.dev/work" },
  "800": { to: "info@bbbstudio.au", url: "https://djaouad.is-a.dev/work" },
  "801": { to: "hello@circly.ai", url: "https://djaouad.is-a.dev/work" },
  "802": { to: "hello@agencyaiuk.com", url: "https://djaouad.is-a.dev/work" },
  "803": { to: "info@ai.nl", url: "https://djaouad.is-a.dev/work" },
  "805": { to: "hello@roguedigital.ai", url: "https://djaouad.is-a.dev/work" },
  "807": { to: "info@intellectyx.com", url: "https://djaouad.is-a.dev/work" },
  "808": { to: "info@kayzworks.com", url: "https://djaouad.is-a.dev/work" },
  "809": { to: "info@winder.ai", url: "https://djaouad.is-a.dev/work" },
  "810": { to: "info@torontoai.digital", url: "https://djaouad.is-a.dev/work" },
  "811": { to: "hello@aariyatech.co.uk", url: "https://djaouad.is-a.dev/work" },
  "812": { to: "info@contextstudios.ai", url: "https://djaouad.is-a.dev/work" },
  "813": { to: "contact@ai-tec.co.uk", url: "https://djaouad.is-a.dev/work" },
  "814": { to: "info@theaiagencyusa.com", url: "https://djaouad.is-a.dev/work" },
  "815": { to: "info@softwaredevelopment.co.uk", url: "https://djaouad.is-a.dev/work" },
  "816": { to: "hello@ailabs.co.nz", url: "https://djaouad.is-a.dev/work" },
  "817": { to: "hello@aiagent.nl", url: "https://djaouad.is-a.dev/work" },
  "818": { to: "contact@ragbase.ai", url: "https://djaouad.is-a.dev/work" },
  "819": { to: "info@aiagentsagency.ca", url: "https://djaouad.is-a.dev/work" },
  "820": { to: "info@agts.llc", url: "https://djaouad.is-a.dev/work" },
  "859": { to: "hello@agencemerlin.com", url: "https://djaouad.is-a.dev/work" },
  "860": { to: "info@hetaibedrijf.nl", url: "https://djaouad.is-a.dev/work" },
  "861": { to: "info@aifais.com", url: "https://djaouad.is-a.dev/work" },
  "862": { to: "hello@triadagency.ai", url: "https://djaouad.is-a.dev/work" },
  "863": { to: "info@nextriq.nl", url: "https://djaouad.is-a.dev/work" },
  "864": { to: "info@kelriva.ai", url: "https://djaouad.is-a.dev/work" },
  "865": { to: "hello@artomai.com", url: "https://djaouad.is-a.dev/work" },
  "867": { to: "info@integraite-ai.com", url: "https://djaouad.is-a.dev/work" },
  "868": { to: "info@x-agentic.ai", url: "https://djaouad.is-a.dev/work" },
  "869": { to: "andy@fliweel.tech", url: "https://djaouad.is-a.dev/work" },
  "870": { to: "info@sanetech-solutions.de", url: "https://djaouad.is-a.dev/work" },
  "871": { to: "hallo@remodify.de", url: "https://djaouad.is-a.dev/work" },
  "872": { to: "info@globeria-consulting.de", url: "https://djaouad.is-a.dev/work" },
  "873": { to: "contacto@cpgestudioia.tech", url: "https://djaouad.is-a.dev/work" },
  "874": { to: "hello@twinsummit.ai", url: "https://djaouad.is-a.dev/work" },
};

export default async (req: Request, context: { params: Record<string, string> }) => {
  const id = context.params.id;
  const lead = LEADS[id];
  if (!lead) return new Response("Unknown link", { status: 404 });

  try {
    const store = getStore("clicks");
    await store.setJSON(`${Date.now()}_${id}`, {
      id,
      to: lead.to,
      ts: new Date().toISOString(),
      ua: req.headers.get("user-agent") ?? "",
      ip: req.headers.get("x-nf-client-connection-ip") ?? "",
    });
  } catch {
    // tracking must never block the redirect
  }
  return Response.redirect(lead.url, 302);
};
