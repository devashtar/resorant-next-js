import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineArrowUp = ({
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
      d='M12 21a.827.827 0 0 1-.823-.707l-.007-.111V5.799l-5.251 5.196a.84.84 0 0 1-1.175.003.81.81 0 0 1-.082-1.065l.08-.092 6.67-6.6.016-.017a.85.85 0 0 1 .057-.047l-.074.064A.831.831 0 0 1 11.97 3L12 3h.028c.02 0 .041.002.062.004L11.999 3a.847.847 0 0 1 .495.161c.038.027.07.056.1.086l6.664 6.594a.81.81 0 0 1-.002 1.157.84.84 0 0 1-1.082.077l-.093-.08-5.25-5.195v14.382A.824.824 0 0 1 12 21Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineArrowUp
