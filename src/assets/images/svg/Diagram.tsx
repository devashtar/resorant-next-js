import * as React from 'react'
import { SVGProps } from 'react'

const Diagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={188}
    height={188}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      opacity={0.1}
      cx={94}
      cy={93.879}
      r={88}
      fill='#1F1D2B'
      stroke='#fff'
      strokeWidth={11.478}
    />
    <circle
      opacity={0.05}
      cx={94}
      cy={93.879}
      r={76.522}
      fill='#1F1D2B'
      stroke='#fff'
      strokeWidth={11.478}
    />
    <circle
      opacity={0.1}
      cx={93.999}
      cy={93.879}
      r={65.043}
      fill='#1F1D2B'
      stroke='#fff'
      strokeWidth={11.478}
    />
    <circle
      opacity={0.05}
      cx={94}
      cy={93.879}
      r={53.565}
      fill='#1F1D2B'
      stroke='#fff'
      strokeWidth={11.478}
    />
    <path
      d='M6 93.879c0 48.601 39.399 88 88 88s88-39.399 88-88-39.399-88-88-88'
      stroke='#65B0F6'
      strokeWidth={11.478}
      strokeLinecap='round'
    />
    <g filter='url(#a)'>
      <path
        d='M94 170.401c42.262 0 76.522-34.26 76.522-76.522 0-42.262-34.26-76.522-76.522-76.522'
        stroke='#FFB572'
        strokeWidth={11.478}
        strokeLinecap='round'
      />
    </g>
    <path
      d='M94.439 28.283a65.047 65.047 0 0 1 56.106 32.14 65.044 65.044 0 0 1-111.528 66.949'
      stroke='#FF7CA3'
      strokeWidth={11.478}
      strokeLinecap='round'
    />
    <defs>
      <filter
        id='a'
        x={84.261}
        y={11.618}
        width={96}
        height={172.522}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_207_54' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_207_54'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export default Diagram
