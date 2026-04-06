import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          a
        </span>
      </div>
    ),
    { ...size }
  )
}
