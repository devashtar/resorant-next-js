import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineOrder = ({
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
      d='M14.986 2C18.048 2 20 3.435 20 6.258V20.33c0 .443-.172.867-.477 1.18-.305.313-.72.489-1.162.489a1.705 1.705 0 0 1-.775-.203l-5.612-3.134-5.59 3.14c-.673.36-1.489.194-2-.405l-.098-.126-.093-.155A1.778 1.778 0 0 1 4 20.331V6.434C4 3.5 5.91 2 9.014 2h5.972Zm0 1.448H9.014c-2.395 0-3.602.948-3.602 2.986V20.32c0 .044.011.088 0 .07l.037.063c.065.09.186.12.27.074l5.588-3.138c.416-.23.918-.23 1.336.001l5.603 3.128c.043.023.09.035.126.035a.213.213 0 0 0 .153-.064.224.224 0 0 0 .063-.157V6.258c0-1.9-1.238-2.81-3.602-2.81Zm.422 4.869c.39 0 .706.324.706.723 0 .367-.266.67-.61.718l-.096.006H8.54a.715.715 0 0 1-.706-.723c0-.367.266-.67.61-.718l.096-.006h6.868Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineOrder
