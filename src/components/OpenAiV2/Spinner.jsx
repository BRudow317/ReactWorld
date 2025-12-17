import React from "react";

export default function Spinner({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="19" cy="19" r="18" stroke="#e2e8f0" strokeWidth="2" />
        <path
          d="M19 1a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1z"
          fill="#14b8a6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 19 19"
            to="360 19 19"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
