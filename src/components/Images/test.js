import React from "react";
const SvgLeftbracket = props => (
    <svg preserveAspectRatio="none" viewBox="0 0 100 125" {...props}>
      <defs>
        <path
          className="leftbracket_svg__path"
          fill="#fff"
          stroke="#000"
          strokeWidth={4}
          d="M51.3 22.9q1.7-1.35 6.45-1.35v-2.7q-3.4 0-5.45.65-2.35.7-3.7 2.4-1.35 2-1.35 6.4v14.6Q46.95 46 42 50q.45.05 2.95 2.95 2.5 2.9 2.3 4.15V72q0 4.4 1.35 6.45 2.7 2.7 9.45 2.7v-2.7q-4.75 0-6.4-1.35-1.35-1.35-1.35-5.1V57.1q0-3.7-4.05-7.05.25-.1 2-2.1 2.05-2.35 2.05-5.05V28.3q0-4.05 1-5.4z"
          id="leftbracket_svg__a"
        />
      </defs>
      <use xlinkHref="#leftbracket_svg__a" />
    </svg>
  );
  
  export default SvgLeftbracket;
  
  