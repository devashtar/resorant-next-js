import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLinePrint = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.25 8A2.75 2.75 0 0 1 4 5.25h16A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 16V8Z'
      fill='#3B5162'
    />
    <path d='M20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' fill='#3B5162' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.25 2A.75.75 0 0 1 6 1.25h12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H6A.75.75 0 0 1 5.25 6V2Zm1.5.75v2.5h10.5v-2.5H6.75ZM5.25 14a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-8Zm1.5.75v6.5h10.5v-6.5H6.75Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLinePrint
