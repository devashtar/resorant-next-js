import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineMessage = ({
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
      d='M16.321 2.758a5.518 5.518 0 0 1 3.987 1.774 5.568 5.568 0 0 1 1.479 4.085l-.002 6.237a5.6 5.6 0 0 1-1.477 4.13 5.522 5.522 0 0 1-3.995 1.774h-9.06c-3.17 0-5.457-2.561-5.457-5.859V8.617c0-3.297 2.287-5.859 5.456-5.859h9.07Zm-.017 1.528H7.252c-2.293 0-3.939 1.844-3.939 4.331v6.282c0 2.488 1.646 4.33 3.94 4.33h9.051a4.005 4.005 0 0 0 2.895-1.287 4.097 4.097 0 0 0 1.07-3.043l.001-6.327a4.064 4.064 0 0 0-1.072-2.998 4.005 4.005 0 0 0-2.894-1.288Zm1.516 4.11c.238.3.216.725-.036.998l-.082.077-4.107 3.31a2.89 2.89 0 0 1-3.416.115l-.161-.119-4.135-3.304a.768.768 0 0 1-.122-1.074.755.755 0 0 1 .973-.187l.092.063 4.13 3.301a1.38 1.38 0 0 0 1.58.089l.118-.083 4.1-3.305a.755.755 0 0 1 1.066.12Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineMessage
