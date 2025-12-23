import React, { useState } from "react";
import { ServicesCardGrid } from "./ServicesCardGrid";
import { useTheme } from "../../../../themes/ThemeContext";
import { GlobalCSS } from "../../../../layouts";

/**
 * Demo wiring:
 * - clicking a card scrolls to #get-quote
 * - we also pre-fill "Selected Service" in the quote section
 *
 * NOTE: This example assumes your app already provides the ThemeProvider
 * behind useTheme() (per your project setup).
 */
export function ServicesCardGridExample() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedService, setSelectedService] = useState("");

  return (
    <div
      style={{
        backgroundColor: isDark ? GlobalCSS.GlobalColors.mlmDark : GlobalCSS.GlobalColors.mlmWhite,
      }}
    >
      <ServicesCardGrid
        quoteSectionId="get-quote"
        onSelectService={(serviceTitle) => setSelectedService(serviceTitle)}
      />

      {/* This is the section your cards link/scroll to. */}
      <section
        id="get-quote"
        style={{
          padding: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
        aria-label="Get a Quote"
      >
        <h2
          style={{
            margin: "0 0 10px 0",
            color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
          }}
        >
          Get a Quote
        </h2>

        <div
          style={{
            borderRadius: "16px",
            padding: "16px",
            border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.10)",
            backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                marginBottom: "6px",
                color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.70)",
              }}
            >
              Selected Service
            </label>
            <input
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              placeholder="Click a service card above..."
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: isDark ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(0,0,0,0.18)",
                backgroundColor: isDark ? "rgba(0,0,0,0.35)" : GlobalCSS.GlobalColors.mlmWhite,
                color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
                outline: "none",
              }}
            />
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              lineHeight: "18px",
              color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.65)",
            }}
          >
            Replace this demo with your real quote form section. The key is keeping the section id as
            <code style={{ marginLeft: "6px" }}>get-quote</code> (or pass a different quoteSectionId).
          </p>
        </div>
      </section>
    </div>
  );
}
