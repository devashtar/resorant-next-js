import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineBack = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d='M8.5 16.5 4 12m0 0 4.5-4.5M4 12h16'
      stroke='#3B5162'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SvgIconLineBack
