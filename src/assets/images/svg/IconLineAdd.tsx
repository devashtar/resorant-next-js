import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineAdd = ({
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
      d='M12 3v9m0 9v-9m0 0h9m-9 0H3'
      stroke='#3B5162'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SvgIconLineAdd
