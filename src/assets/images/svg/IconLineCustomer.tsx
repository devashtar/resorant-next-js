import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineCustomer = ({
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
      d='m9.591 14.456.32.002c4.645.04 7.272.978 7.272 3.54 0 2.508-2.518 3.476-6.96 3.557l-.632.005c-4.844 0-7.59-.92-7.59-3.542 0-2.624 2.757-3.562 7.59-3.562Zm0 1.5c-4.017 0-6.09.705-6.09 2.062 0 1.349 2.068 2.042 6.09 2.042 4.018 0 6.093-.705 6.093-2.062 0-1.348-2.071-2.042-6.093-2.042Zm7.996-2.208c.58.04 1.158.123 1.713.246 1.188.236 2.071.677 2.476 1.526.299.63.299 1.36 0 1.99-.403.846-1.277 1.284-2.472 1.53a.75.75 0 0 1-.302-1.47c.769-.157 1.28-.414 1.419-.705a.818.818 0 0 0 0-.7c-.139-.292-.653-.549-1.43-.703-.497-.11-1-.183-1.506-.217a.75.75 0 1 1 .102-1.497ZM9.591 2.5a5.12 5.12 0 0 1 5.136 5.134 5.12 5.12 0 0 1-5.136 5.135 5.119 5.119 0 0 1-5.134-5.135A5.118 5.118 0 0 1 9.591 2.5Zm6.43 1.07a4.047 4.047 0 0 1 0 8.093.75.75 0 0 1 0-1.5 2.547 2.547 0 1 0 0-5.094.75.75 0 0 1 0-1.5ZM9.59 4a3.618 3.618 0 0 0-3.634 3.634 3.619 3.619 0 0 0 3.634 3.635 3.62 3.62 0 0 0 3.636-3.635A3.62 3.62 0 0 0 9.59 4Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineCustomer