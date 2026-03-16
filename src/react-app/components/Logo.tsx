"use client";

export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - premium ring */}
      <circle cx="60" cy="60" r="58" stroke="#c9a84c" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="52" fill="#1a1a2e" />

      {/* Road/route stylized path */}
      <path
        d="M30 78 Q45 50 60 38 Q75 26 90 42"
        stroke="#c9a84c"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M28 85 Q48 55 60 42 Q72 29 92 48"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.15"
      />

      {/* Letter T */}
      <text
        x="35"
        y="78"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        letterSpacing="-2"
      >
        T
      </text>

      {/* Letter M */}
      <text
        x="60"
        y="78"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="48"
        fontWeight="bold"
        fill="#c9a84c"
        letterSpacing="-2"
      >
        M
      </text>

      {/* Small accent dot */}
      <circle cx="60" cy="95" r="2" fill="#c9a84c" opacity="0.6" />

      {/* Subtle shine effect */}
      <ellipse
        cx="45"
        cy="35"
        rx="20"
        ry="15"
        fill="white"
        opacity="0.03"
      />
    </svg>
  );
}
