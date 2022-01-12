import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineArrowIosDown = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 13.333a.827.827 0 0 1-.533-.193l-5-4.167a.833.833 0 1 1 1.066-1.28l4.476 3.73 4.468-3.596a.834.834 0 0 1 1.046 1.299l-5 4.023a.833.833 0 0 1-.523.184Z'
      fill='#fff'
    />
    <mask
      id='Icon-Line-arrow-ios-down_svg__a'
      style={{
        maskType: 'alpha'
      }}
      maskUnits='userSpaceOnUse'
      x={4}
      y={7}
      width={12}
      height={7}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 13.333a.827.827 0 0 1-.533-.193l-5-4.167a.833.833 0 1 1 1.066-1.28l4.476 3.73 4.468-3.596a.834.834 0 0 1 1.046 1.299l-5 4.023a.833.833 0 0 1-.523.184Z'
        fill='#fff'
      />
    </mask>
    <g mask='url(#Icon-Line-arrow-ios-down_svg__a)'>
      <path fill='#fff' d='M0 0h20v20H0z' />
    </g>
  </svg>
)

export default SvgIconLineArrowIosDown
