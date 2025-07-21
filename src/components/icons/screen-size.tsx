import React from 'react';

const ScreenSizeIcon = ({ className = "", color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        fill={color}
        {...props}
    >
        <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3" /><path d="M6.75 12.25v-4h4m6.5 3.5v4h-4" /></g>
    </svg>
);
export default ScreenSizeIcon