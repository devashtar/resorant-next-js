import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgLogoVector = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width='40px'
    height='40px'
    viewBox='0 0 34 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d='M28.667.333H5.333c-2.756 0-5 2.244-5 5v4.719c0 1.755.637 3.35 1.667 4.576v15.705A1.667 1.667 0 0 0 3.667 32H17a1.667 1.667 0 0 0 1.667-1.667V22h6.666v8.333A1.667 1.667 0 0 0 27 32h3.334A1.667 1.667 0 0 0 32 30.333V14.627a7.09 7.09 0 0 0 1.667-4.577V5.333c0-2.756-2.244-5-5-5Zm1.666 5v4.719c0 1.9-1.414 3.52-3.151 3.611l-.182.004a3.337 3.337 0 0 1-3.333-3.334V3.667h5c.92 0 1.666.748 1.666 1.666Zm-16.666 5V3.667h6.667v6.666A3.337 3.337 0 0 1 17 13.667a3.337 3.337 0 0 1-3.333-3.334Zm-10-5c0-.918.747-1.666 1.667-1.666h5v6.666A3.337 3.337 0 0 1 7 13.667l-.181-.005c-1.737-.09-3.152-1.71-3.152-3.61V5.333Zm10 18.334H7v-5h6.667v5Z'
      fill='url(#logo-vector_svg__a)'
    />
    <defs>
      <linearGradient
        id='logo-vector_svg__a'
        x1={17}
        y1={0.333}
        x2={17}
        y2={32}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EA9769' />
        <stop offset={1} stopColor='#EA6969' />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgLogoVector
