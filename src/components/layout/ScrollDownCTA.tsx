import React from "react";

export default function ScrollDownCTA({ label = "Read more" }: { label?: string }) {
  return (
    <button
      className="link-to-button"
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", background: "none", border: "none", padding: 0 }}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
