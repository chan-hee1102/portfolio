import { ImageResponse } from "next/og";

export const alt = "임찬희 | 풀스택 개발자 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #6366f1 45%, #8b5cf6 100%)",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12) 0%, transparent 50%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.35em",
              marginBottom: 32,
              fontWeight: 600,
            }}
          >
            PORTFOLIO
          </div>

          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            IM CHANHEE
          </div>

          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "0.05em",
              fontWeight: 500,
            }}
          >
            Data-Driven Fullstack Developer
          </div>

          <div
            style={{
              marginTop: 56,
              display: "flex",
              gap: 16,
            }}
          >
            {["Next.js", "FastAPI", "Claude API", "Supabase"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "10px 20px",
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
