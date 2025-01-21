import React from 'react';

export const CancelIcon:React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
    ...props
}) => {
  return (
      <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          className={`${className || ''}`}
          {...props}
      >
          <path
              d='M7.40994 5.99909L11.7099 1.70909C11.8982 1.52078 12.004 1.26539 12.004 0.999087C12.004 0.732785 11.8982 0.477391 11.7099 0.289087C11.5216 0.100783 11.2662 -0.00500488 10.9999 -0.00500488C10.7336 -0.00500488 10.4782 0.100783 10.2899 0.289087L5.99994 4.58909L1.70994 0.289087C1.52164 0.100783 1.26624 -0.00500488 0.999939 -0.00500488C0.733637 -0.00500488 0.478243 0.100783 0.289939 0.289087C0.101635 0.477391 -0.00415277 0.732785 -0.00415277 0.999087C-0.00415278 1.26539 0.101635 1.52078 0.289939 1.70909L4.58994 5.99909L0.289939 10.2891C0.196211 10.3821 0.121816 10.4927 0.0710478 10.6145C0.0202791 10.7364 -0.00585938 10.8671 -0.00585938 10.9991C-0.00585938 11.1311 0.0202791 11.2618 0.0710478 11.3837C0.121816 11.5055 0.196211 11.6161 0.289939 11.7091C0.382902 11.8028 0.493503 11.8772 0.615362 11.928C0.737221 11.9787 0.867927 12.0049 0.999939 12.0049C1.13195 12.0049 1.26266 11.9787 1.38452 11.928C1.50638 11.8772 1.61698 11.8028 1.70994 11.7091L5.99994 7.40909L10.2899 11.7091C10.3829 11.8028 10.4935 11.8772 10.6154 11.928C10.7372 11.9787 10.8679 12.0049 10.9999 12.0049C11.132 12.0049 11.2627 11.9787 11.3845 11.928C11.5064 11.8772 11.617 11.8028 11.7099 11.7091C11.8037 11.6161 11.8781 11.5055 11.9288 11.3837C11.9796 11.2618 12.0057 11.1311 12.0057 10.9991C12.0057 10.8671 11.9796 10.7364 11.9288 10.6145C11.8781 10.4927 11.8037 10.3821 11.7099 10.2891L7.40994 5.99909Z'
              fill='#8F8F8F'
          />
      </svg>
  )
};