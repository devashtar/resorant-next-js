import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineRestaurant = ({
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
      d='M21.964 6.774 20.535 2.49A.714.714 0 0 0 19.857 2H4.143a.714.714 0 0 0-.678.489L2.036 6.774A.728.728 0 0 0 2 6.981v.733a3.556 3.556 0 0 0 1.429 2.842v9.301c0 1.184.959 2.143 2.142 2.143H18.43c1.183 0 2.142-.96 2.142-2.143v-9.301A3.557 3.557 0 0 0 22 7.714V6.98a.728.728 0 0 0-.036-.206ZM4.7 3.43h14.642l.953 2.857H3.7l1-2.857Zm8.729 17.142H10.57v-5.714h2.858v5.714Zm5.714-.714c0 .395-.32.714-.714.714h-3.572v-6.428a.714.714 0 0 0-.714-.714H9.857a.714.714 0 0 0-.714.714v6.428H5.57a.714.714 0 0 1-.714-.714v-8.643a3.531 3.531 0 0 0 2.857-.655 3.62 3.62 0 0 0 4.286 0 3.62 3.62 0 0 0 4.286 0 3.53 3.53 0 0 0 2.857.655v8.643Zm-.714-10a2.111 2.111 0 0 1-1.605-.741.714.714 0 0 0-1.076 0 2.155 2.155 0 0 1-3.21 0 .739.739 0 0 0-1.076 0 2.155 2.155 0 0 1-3.21 0 .739.739 0 0 0-1.076 0c-.4.47-.987.74-1.605.741A2.143 2.143 0 0 1 3.43 7.714H20.57c0 1.184-.959 2.143-2.142 2.143Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineRestaurant
