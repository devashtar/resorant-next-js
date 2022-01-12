import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineSecurity = ({
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
      d='M12.01 2c2.314 0 4.348 1.449 5.093 3.567a.747.747 0 0 1-.471.954.766.766 0 0 1-.97-.464C15.128 4.54 13.67 3.5 12.007 3.5 9.94 3.492 8.245 5.081 8.133 7.086l-.006.195v1.345h7.756c2.477 0 4.498 1.92 4.612 4.33l.005.213v4.288c0 2.51-2.067 4.543-4.617 4.543H8.117C5.567 22 3.5 19.966 3.5 17.457V13.17c0-1.987 1.296-3.676 3.102-4.293V7.278C6.615 4.35 9.038 1.988 12.01 2Zm3.873 8.126H8.117c-1.708 0-3.092 1.363-3.092 3.043v4.288c0 1.68 1.384 3.043 3.092 3.043h7.766c1.708 0 3.092-1.362 3.092-3.043V13.17c0-1.68-1.384-3.043-3.092-3.043ZM12 13.452c.386 0 .705.283.756.649l.006.101v2.222c0 .415-.34.75-.762.75a.758.758 0 0 1-.755-.648l-.007-.102v-2.222c0-.414.341-.75.762-.75Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineSecurity
