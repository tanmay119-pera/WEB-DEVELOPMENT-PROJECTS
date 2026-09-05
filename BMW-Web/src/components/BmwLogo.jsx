import React from 'react';

export default function BmwLogo({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Outer Chrome Bevel */}
        <linearGradient id="outerChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#d1d5db" />
          <stop offset="50%" stopColor="#6b7280" />
          <stop offset="70%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>

        {/* Inner Ring Chrome */}
        <linearGradient id="innerChrome" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Authentic Bavarian Blue */}
        <linearGradient id="bavarianBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078d4" />
          <stop offset="100%" stopColor="#005a9e" />
        </linearGradient>

        {/* Pristine Porcelain White */}
        <linearGradient id="porcelainWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        {/* Crystalline Gloss Sheen */}
        <linearGradient id="emblemGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* 1. Outer Metallic Bevel */}
      <circle cx="50" cy="50" r="48" fill="#090b10" stroke="url(#outerChrome)" strokeWidth="2.5" />

      {/* 2. Deep Matte Black Ring for Typography */}
      <circle cx="50" cy="50" r="45" fill="#08090c" stroke="#1e293b" strokeWidth="0.8" />

      {/* 3. Inner Chrome Retaining Ring */}
      <circle cx="50" cy="50" r="29" fill="none" stroke="url(#innerChrome)" strokeWidth="1.8" />

      {/* 4. Official Bavarian Quadrants (Centered Circle Radius 28.5) */}
      <g clipPath="url(#quadrantClip)">
        <clipPath id="quadrantClip">
          <circle cx="50" cy="50" r="28" />
        </clipPath>

        {/* Top-Left: Bavarian Blue */}
        <path d="M50 22 A28 28 0 0 0 22 50 L50 50 Z" fill="url(#bavarianBlue)" />

        {/* Top-Right: Pure White */}
        <path d="M50 22 A28 28 0 0 1 78 50 L50 50 Z" fill="url(#porcelainWhite)" />

        {/* Bottom-Right: Bavarian Blue */}
        <path d="M78 50 A28 28 0 0 1 50 78 L50 50 Z" fill="url(#bavarianBlue)" />

        {/* Bottom-Left: Pure White */}
        <path d="M50 78 A28 28 0 0 1 22 50 L50 50 Z" fill="url(#porcelainWhite)" />
      </g>

      {/* 5. Precision Silver Dividing Crosshairs */}
      <line x1="50" y1="21" x2="50" y2="79" stroke="#cbd5e1" strokeWidth="1.2" />
      <line x1="21" y1="50" x2="79" y2="50" stroke="#cbd5e1" strokeWidth="1.2" />

      {/* 6. Subtle 3D Spherical Gloss Overlay */}
      <circle cx="50" cy="50" r="28" fill="url(#emblemGloss)" pointerEvents="none" />

      {/* 7. Official BMW Letterforms (Crisp, High-Precision Vector Geometry) */}
      {/* Letter 'B' */}
      <g transform="translate(28.5, 29) rotate(-38)">
        <text
          x="0"
          y="0"
          fill="#FFFFFF"
          fontSize="12.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="0"
        >
          B
        </text>
      </g>

      {/* Letter 'M' */}
      <g transform="translate(50, 16)">
        <text
          x="0"
          y="0"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="0"
        >
          M
        </text>
      </g>

      {/* Letter 'W' */}
      <g transform="translate(71.5, 29) rotate(38)">
        <text
          x="0"
          y="0"
          fill="#FFFFFF"
          fontSize="12.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="0"
        >
          W
        </text>
      </g>
    </svg>
  );
}
