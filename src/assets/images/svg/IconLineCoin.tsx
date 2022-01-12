import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineCoin = ({
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
    <circle cx={12} cy={12} r={9} stroke='#3B5162' strokeWidth={1.8} />
    <path
      d='M10.459 9.941c0-.594.457-.966 1.077-1.038V11a1.506 1.506 0 0 1-.183-.053c-.594-.195-.894-.535-.894-1.005Zm3.264 4.074c0 .64-.49 1.064-1.181 1.123v-2.252c.045.013.091.026.13.032.731.203 1.051.562 1.051 1.097Zm-1.168 3.362-.007-.829c1.789-.17 2.925-1.155 2.925-2.71 0-1.58-1.064-2.245-2.376-2.526l-.555-.117V8.916c.692.111 1.077.633 1.097 1.156h1.67c-.025-1.358-1.09-2.39-2.741-2.566v-.849H11.51V7.5c-1.58.144-2.82 1.012-2.82 2.58 0 1.481 1.07 2.239 2.285 2.506l.561.124v2.429c-.835-.111-1.273-.614-1.306-1.214H8.52c.013 1.207.823 2.48 2.984 2.637l-.007.816h1.058Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineCoin
