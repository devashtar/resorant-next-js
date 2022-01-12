import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgIconLineAppearance = ({
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
      d='M6.483 2.815a6.562 6.562 0 0 1 5.25.541l.263.158.268-.159a6.571 6.571 0 0 1 4.982-.619l.266.08c3.673 1.182 5.317 5.192 4.082 9.03a12.42 12.42 0 0 1-2.977 4.736 34.695 34.695 0 0 1-5.995 4.665l-.23.143a.732.732 0 0 1-.762.006l-.245-.147a34.717 34.717 0 0 1-6.005-4.673 12.427 12.427 0 0 1-2.975-4.747c-1.231-3.823.407-7.832 4.078-9.014Zm4.892 2.04a5.1 5.1 0 0 0-4.443-.649c-2.845.916-4.134 4.072-3.14 7.16a10.942 10.942 0 0 0 2.614 4.168A33.221 33.221 0 0 0 12.144 20l-.143-.09.468-.294a33.217 33.217 0 0 0 4.595-3.574l.528-.502a10.935 10.935 0 0 0 2.614-4.158c.999-3.101-.296-6.26-3.142-7.175a5.11 5.11 0 0 0-4.628.78.732.732 0 0 1-.865.008l-.196-.14Zm4.495 1.629a3.441 3.441 0 0 1 2.376 2.995.73.73 0 0 1-1.458.122 1.98 1.98 0 0 0-1.363-1.725.73.73 0 1 1 .445-1.392Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineAppearance
