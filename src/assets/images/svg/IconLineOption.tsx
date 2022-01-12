import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineOption = ({
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
      d='M18.237 14.072c2.076 0 3.763 1.666 3.763 3.714S20.313 21.5 18.237 21.5c-2.075 0-3.762-1.666-3.762-3.714s1.687-3.714 3.762-3.714Zm0 1.742c-1.102 0-1.997.884-1.997 1.972 0 1.087.895 1.972 1.997 1.972 1.103 0 1.998-.885 1.998-1.972 0-1.088-.895-1.972-1.998-1.972Zm-8.12 1.1c.487 0 .882.391.882.872 0 .48-.395.87-.882.87H2.883a.877.877 0 0 1-.882-.87c0-.48.395-.871.882-.871h7.234ZM5.762 2.5c2.076 0 3.763 1.666 3.763 3.714 0 2.047-1.687 3.714-3.763 3.714C3.688 9.928 2 8.26 2 6.214 2 4.166 3.688 2.5 5.762 2.5Zm0 1.742c-1.1 0-1.997.885-1.997 1.972s.896 1.972 1.997 1.972c1.103 0 1.998-.885 1.998-1.972s-.895-1.972-1.998-1.972Zm15.356 1.101c.487 0 .882.39.882.871 0 .48-.395.87-.882.87h-7.235a.877.877 0 0 1-.883-.87c0-.48.395-.871.883-.871h7.235Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineOption
