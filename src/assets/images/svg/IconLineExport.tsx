import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineExport = ({
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
      d='M14.474 2c.043 0 .085.004.126.01l.136.002c.205 0 .4.083.541.23l5.066 5.276a.75.75 0 0 1 .21.52v9.19c0 2.495-2.025 4.637-4.48 4.637H8.084c-2.583 0-4.584-2.04-4.584-4.637V6.49c0-2.461 2.097-4.48 4.584-4.48h6.264a.755.755 0 0 1 .126-.01Zm-.75 1.51-5.64.002C6.413 3.512 5 4.872 5 6.49v10.737c0 1.775 1.336 3.137 3.084 3.137h7.989c1.607 0 2.98-1.452 2.98-3.137l-.002-8.245-.875.003c-.334 0-.713 0-1.135-.002a3.325 3.325 0 0 1-3.312-3.136l-.005-.189V3.51ZM11.64 8.69a.75.75 0 0 1 .743.65l.007.1v4.755l1.557-1.561a.75.75 0 0 1 1.135.974l-.072.085-2.84 2.85-.043.041a.719.719 0 0 1-.032.026l.076-.066a.755.755 0 0 1-.516.22h-.03a.746.746 0 0 1-.073-.005l.088.005a.752.752 0 0 1-.185-.023l-.034-.01a.617.617 0 0 1-.064-.022l-.034-.015a.524.524 0 0 1-.052-.026l-.045-.028a.417.417 0 0 1-.034-.024l-.008-.006a.779.779 0 0 1-.032-.026l-.044-.04-2.838-2.852a.75.75 0 0 1 .979-1.13l.084.072 1.556 1.564V9.441a.75.75 0 0 1 .75-.75Zm3.582-4.339V5.66c0 1.007.815 1.823 1.821 1.825h1.188l-3.008-3.133Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineExport
