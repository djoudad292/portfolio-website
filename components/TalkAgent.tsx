"use client";

import { useState, useRef, useEffect } from "react";

type Msg = {
  role: "agent" | "user";
  text: string;
  trace?: string[];
};

export default function TalkAgent({
  lead,
  site,
  company,
}: {
  lead: string;
  site: string;
  company: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function ask(q: string) {
    if (!q.trim() || busy) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch(
        `/api/amp/chat?l=${encodeURIComponent(lead)}&s=${encodeURIComponent(site)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: q }),
        }
      );
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "agent",
          text: data.answer ?? data.error ?? "Something went wrong.",
          trace: data.trace,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "agent", text: "Network hiccup — try again." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui, sans-serif",
        color: "#e8e8ef",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #23232e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>
            Djaouad Frih <span style={{ color: "#5b5b6b", fontWeight: 400 }}>· Full-Stack AI Engineer</span>
          </div>
          <div style={{ fontSize: 11, color: "#34d399", marginTop: 2 }}>
            ● LIVE — agent trained on <b>{company}</b>&apos;s website
          </div>
        </div>
        <a
          href="https://calendly.com/oufr29/30min"
          style={{
            padding: "9px 16px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            fontSize: 12,
            fontWeight: 800,
            borderRadius: 8,
          }}
        >
          Book free call →
        </a>
      </header>

      {/* Hero */}
      <div style={{ padding: "26px 20px 6px", textAlign: "center" }}>
        <h1 style={{ fontSize: 22, margin: 0, lineHeight: 1.3 }}>
          Ask anything about <span style={{ color: "#34d399" }}>{company}</span>.
          <br />
          The agent reads the live website to answer.
        </h1>
        <p style={{ color: "#a5a5b4", fontSize: 13, marginTop: 10 }}>
          Built by Djaouad in one sitting — imagine what he ships in two weeks for you.
        </p>
      </div>

      {/* Chat */}
      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 720,
          margin: "14px auto 0",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          overflowY: "auto",
        }}
      >
        {messages.length === 0 && !busy && (
          <div
            style={{
              border: "1px dashed #26262f",
              borderRadius: 12,
              padding: 18,
              textAlign: "center",
              color: "#9c9cad",
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            Try: “What services do you offer?” · “Who is behind this?” ·
            “Summarize your pricing”
          </div>
        )}
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} style={{ alignSelf: "flex-end", maxWidth: "85%" }}>
              <div
                style={{
                  background: "#2563eb",
                  padding: "10px 14px",
                  borderRadius: "12px 12px 2px 12px",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={i} style={{ alignSelf: "flex-start", maxWidth: "90%" }}>
              {msg.trace && (
                <div style={{ fontSize: 11, color: "#34d399", marginBottom: 4 }}>
                  {msg.trace.map((t, j) => (
                    <div key={j}>✓ {t}</div>
                  ))}
                </div>
              )}
              <div
                style={{
                  background: "#181820",
                  border: "1px solid #26262f",
                  padding: "12px 14px",
                  borderRadius: "12px 12px 12px 2px",
                  fontSize: 14,
                  lineHeight: 1.55,
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </div>
            </div>
          )
        )}
        {busy && (
          <div style={{ alignSelf: "flex-start", fontSize: 12, color: "#fbbf24" }}>
            ⏳ Agent is browsing {company}&apos;s website…
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        style={{
          display: "flex",
          gap: 8,
          maxWidth: 720,
          width: "100%",
          margin: "12px auto",
          padding: "0 16px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about ${company}…`}
          style={{
            flex: 1,
            padding: "13px 16px",
            background: "#181820",
            border: "1px solid #26262f",
            borderRadius: 10,
            color: "#e8e8ef",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={busy}
          style={{
            padding: "13px 22px",
            background: busy ? "#155e46" : "#059669",
            border: "none",
            borderRadius: 10,
            color: "#fff",
            fontSize: 14,
            fontWeight: 800,
            cursor: busy ? "wait" : "pointer",
          }}
        >
          Ask →
        </button>
      </form>

      {/* Footer CTAs */}
      <footer
        style={{
          borderTop: "1px solid #23232e",
          padding: "14px 16px",
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: 22,
        }}
      >
        {[
          ["🌐 djaouad.tech", "https://djaouad.tech"],
          ["📄 PDF Workspace", "https://docs.djaouad.tech"],
          ["🤖 Receptionist", "https://chat.djaouad.tech"],
          ["💬 WhatsApp", "https://wa.me/213780688125"],
        ].map(([label, url]) => (
          <a
            key={url}
            href={url}
            style={{
              padding: "9px 14px",
              borderRadius: 8,
              border: "1px solid #26262f",
              background: "#181820",
              color: "#e8e8ef",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {label}
          </a>
        ))}
      </footer>
    </main>
  );
}
