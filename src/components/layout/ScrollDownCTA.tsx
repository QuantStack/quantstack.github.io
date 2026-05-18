import React from "react";

export default function ScrollDownCTA({ label = "Read more" }: { label?: string }) {
  return (
    <button
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: "14px 0",
        fontFamily: "var(--ifm-font-family-roboto)",
        fontSize: "15px",
        fontWeight: 700,
        letterSpacing: "0.5px",
        color: "var(--ifm-color-primary-p2)",
        textDecoration: "none",
      }}
    >
      {label}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.5v11M4.5 10l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
