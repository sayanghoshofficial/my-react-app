import React from "react";

const Success = ({ width = 43, height = 44, color = "#68B266" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="43"
        height="44"
      >
        <path
          d="M21.4995 2L26.7525 5.832L33.2555 5.82L35.2525 12.008L40.5205 15.82L38.4995 22L40.5205 28.18L35.2525 31.992L33.2555 38.18L26.7525 38.168L21.4995 42L16.2465 38.168L9.74352 38.18L7.74652 31.992L2.47852 28.18L4.49952 22L2.47852 15.82L7.74652 12.008L9.74352 5.82L16.2465 5.832L21.4995 2Z"
          fill="white"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 22L19.5 27L29.5 17"
          stroke="black"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect x="-2.5" y="-2" width="48" height="48" fill={color} />
      </g>
    </svg>
  );
};

export default Success;