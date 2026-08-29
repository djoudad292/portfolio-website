import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0c10",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "100px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div style={{ width: "14px", height: "14px", borderRadius: "9999px", backgroundColor: "#a3e635" }} />
          <div style={{ fontSize: "20px", color: "#8b94a7", letterSpacing: "4px" }}>
            DJAOUAD.TECH CONSOLE
          </div>
        </div>
        <div
          style={{
            fontSize: "84px",
            fontWeight: "bold",
            color: "#f4f6fb",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "18px",
          }}
        >
          Djaouad Frih.
        </div>
        <div
          style={{
            fontSize: "40px",
            color: "#a3e635",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Full-Stack AI Engineer
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#8b94a7",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          AI agents · RAG · MCP · Web &amp; Mobile — turning AI into business outcomes
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "100px",
            display: "flex",
            gap: "22px",
            fontSize: "19px",
            color: "#8b94a7",
          }}
        >
          <span>chat.djaouad.tech</span>
          <span>docs.djaouad.tech</span>
          <span>customer.djaouad.tech</span>
          <span style={{ color: "#a3e635" }}>mcp.djaouad.tech</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
