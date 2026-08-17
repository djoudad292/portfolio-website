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
          backgroundColor: "#faf8f4",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "100px",
            width: "60px",
            height: "4px",
            backgroundColor: "#c5a55a",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#1e211a",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Djaouad Frih.
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#8a8578",
            fontWeight: 400,
            lineHeight: 1.3,
            marginBottom: "40px",
            maxWidth: "800px",
          }}
        >
          Web & Mobile Developer with AI Integration
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["React / Next.js", "React Native", "AI / LLM", "Full Stack"].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: "#c5a55a15",
                border: "1px solid #c5a55a40",
                color: "#8a7a4a",
                padding: "10px 24px",
                borderRadius: "100px",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "100px",
            fontSize: "18px",
            color: "#b0a99a",
            fontWeight: 400,
          }}
        >
          djaouad.netlify.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
