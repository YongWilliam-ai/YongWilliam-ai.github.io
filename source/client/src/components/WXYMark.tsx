/**
 * WXY Coordinate Mark — abstract X-shaped coordinate crossing with interwoven W/Y paths.
 * Shared brand element for Markets and AI Operations profile routes.
 */
import React from "react";

type WXYMarkProps = {
  variant?: "markets" | "ai";
  label?: string;
  decorative?: boolean;
  className?: string;
};

export default function WXYMark({
  variant = "markets",
  label = "WXY coordinate mark",
  decorative = false,
  className = "",
}: WXYMarkProps) {
  return (
    <svg
      className={`wxy-mark wxy-mark-${variant} ${className}`.trim()}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
    >
      <path className="wxy-boundary" d="M7 7H49V49H7z" />
      <path className="wxy-axis wxy-axis-up" d="M10 46 46 10" />
      <path className="wxy-axis wxy-axis-down" d="M10 10 46 46" />
      <path className="wxy-w" d="M12 16 17 34 23 25 28 34 34 16" />
      <path className="wxy-y" d="M31 16 39 26 47 16M39 26v14" />
      <circle className="wxy-node" cx="28" cy="28" r="2.7" />
    </svg>
  );
}
