import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist for Clinics — Books Patients 24/7 | Djaouad Frih",
  description:
    "Never miss a patient call again. AI receptionist for clinics: answers in Arabic/French/English, books appointments, captures leads. Live demo — fixed price from $500.",
  keywords: ["AI receptionist clinic", "medical chatbot", "clinic appointment booking AI", "AI for doctors"],
};

const features = [
  ["🗓️", "Books appointments 24/7", "Patients book at midnight. Calendar syncs instantly — no phone tag, no lost calls."],
  ["🌐", "Arabic · French · English", "Your patients speak all three. So does your receptionist."],
  ["🩺", "Trained on YOUR clinic", "Services, prices, doctors' schedules, FAQ — answers only from your real information."],
  ["🔐", "Patient-data conscious", "Qualifies on non-sensitive fields only, hands off to staff when needed."],
];

export default function Clinics() {
  return (
    <main style={{ background: "#0a0a0f", color: "#e8e8ef", minHeight: "100vh", fontFamily: "-apple-system, 'Segoe UI', Roboto, Arial, sans-serif" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 20px 80px" }}>
        <a href="/" style={{ color: "#5b5b6b", fontSize: 13, textDecoration: "none" }}>← djaouad.tech</a>

        <div style={{ marginTop: 28, display: "inline-block", border: "1px solid #1d5e3d", background: "#0e1f18", color: "#34d399", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontWeight: 700 }}>
          ● FOR CLINICS & DOCTORS
        </div>

        <h1 style={{ fontSize: "clamp(30px,6vw,44px)", lineHeight: 1.15, marginTop: 18, letterSpacing: "-0.5px" }}>
          Your next patient just called.<br />
          <span style={{ color: "#34d399" }}>Nobody answered.</span>
        </h1>

        <p style={{ color: "#a5a5b4", fontSize: 17, lineHeight: 1.7, marginTop: 18 }}>
          Studies show ~30% of patient calls go unanswered during busy hours — each one books
          with the next clinic instead. This AI receptionist answers <b style={{ color: "#e8e8ef" }}>every
          call and message</b>, in your patients' language, and books them straight into your calendar.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 26 }}>
          <a href="https://chat.djaouad.tech" style={{ background: "#059669", color: "#fff", fontWeight: 800, fontSize: 15, padding: "15px 26px", borderRadius: 11, textDecoration: "none" }}>
            🎙️ Test the live receptionist →
          </a>
          <a href="https://calendly.com/oufr29/30min" style={{ border: "1px solid #2c2c38", color: "#e8e8ef", fontWeight: 700, fontSize: 15, padding: "15px 26px", borderRadius: 11, textDecoration: "none" }}>
            📅 Book a free scoping call
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14, marginTop: 40 }}>
          {features.map(([icon, t, d]) => (
            <div key={t as string} style={{ background: "#14141c", border: "1px solid #23232e", borderRadius: 13, padding: 20 }}>
              <div style={{ fontSize: 24 }}>{icon}</div>
              <div style={{ fontWeight: 800, marginTop: 10 }}>{t}</div>
              <div style={{ color: "#9c9cad", fontSize: 13.5, lineHeight: 1.65, marginTop: 8 }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#101a14", border: "1px solid #1d3a2a", borderRadius: 13, padding: "22px 24px", marginTop: 34 }}>
          <div style={{ fontWeight: 800, color: "#34d399", fontSize: 14 }}>FIXED PRICE — NO SURPRISES</div>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 12, fontSize: 14, color: "#c9cdd6", lineHeight: 1.7 }}>
            <div><b style={{ color: "#fff" }}>$500</b> setup<br />receptionist live on your site & WhatsApp</div>
            <div><b style={{ color: "#fff" }}>+$50/mo</b> hosting & updates<br />or $2,500 full patient-intake system</div>
            <div><b style={{ color: "#fff" }}>7 days</b> typical launch<br />source code yours</div>
          </div>
        </div>

        <p style={{ color: "#5b5b6b", fontSize: 12.5, marginTop: 36, lineHeight: 1.8 }}>
          Built by Djaouad Frih — Full-Stack AI Engineer. The same stack runs my own products
          (chat.djaouad.tech · docs.djaouad.tech), so you test exactly what you buy.
          Prefer an agent to verify me? Point any AI assistant at mcp.djaouad.tech/mcp.
        </p>
      </div>
    </main>
  );
}
