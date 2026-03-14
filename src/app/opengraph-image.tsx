import { ImageResponse } from "next/og";
import { general } from "@/config/general";

export const runtime = "edge";

export const alt = general.appName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {general.appName}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a3a3a3",
              maxWidth: "600px",
              lineHeight: 1.4,
            }}
          >
            {general.appDescription}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
