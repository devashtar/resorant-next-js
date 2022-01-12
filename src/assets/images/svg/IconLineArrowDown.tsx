import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineArrowDown = ({
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
      d='M12 3c.42 0 .768.308.823.707l.007.111v14.383l5.251-5.196a.839.839 0 0 1 1.175-.003.81.81 0 0 1 .082 1.065l-.08.092-6.67 6.6-.016.017a.854.854 0 0 1-.057.047l.074-.064a.832.832 0 0 1-.558.24L12 21h-.028a.839.839 0 0 1-.062-.005l.09.005a.85.85 0 0 1-.495-.161.84.84 0 0 1-.1-.086l-6.664-6.594a.81.81 0 0 1 .002-1.157.84.84 0 0 1 1.082-.077l.093.08 5.25 5.195V3.818c0-.452.372-.818.831-.818Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineArrowDown
