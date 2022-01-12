import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineAboutUs = ({
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
      d='M12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10C2 6.478 6.478 2 12 2Zm0 1.5a8.5 8.5 0 1 0 .002 17.002A8.5 8.5 0 0 0 12 3.5Zm.005 11.546a.75.75 0 0 1 .102 1.493l-.112.007a.75.75 0 0 1-.102-1.493l.112-.007Zm-.01-7.592a.75.75 0 0 1 .743.649l.007.101v4.42a.75.75 0 0 1-1.493.101l-.007-.102V8.204a.75.75 0 0 1 .75-.75Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineAboutUs
