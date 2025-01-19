import React from 'react';

export const LogoMark:React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
    ...props
    }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="45"
            viewBox="0 0 52 45"
            fill="none"
            className={`${className || ""}`}
            {...props}
        >
            <path
                d='M25.5812 0L0 44.0922H51.147L25.5812 0ZM15.6863 30.8692H27.6562L21.679 20.5589L25.5812 13.8241L39.3784 37.604H11.7841L15.6863 30.8692Z'
                fill='white'
            />
        </svg>
    );
};

export default LogoMark;