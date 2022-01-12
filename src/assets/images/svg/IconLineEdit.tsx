import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineEdit = ({
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
      d='M20.341 19.209c.364 0 .659.289.659.646a.65.65 0 0 1-.57.64l-.088.005H13.47a.652.652 0 0 1-.659-.645.65.65 0 0 1 .57-.64l.089-.006h6.87ZM13.66 4.417a3.24 3.24 0 0 1 4.516 0l1.294 1.268a3.087 3.087 0 0 1 0 4.427l-9.728 9.537a2.996 2.996 0 0 1-2.098.85H3.659A.652.652 0 0 1 3 19.84l.1-3.941c.02-.745.331-1.455.869-1.982l9.69-9.5Zm-.753 2.562L4.9 14.829a1.605 1.605 0 0 0-.483 1.101l-.084 3.278h3.31c.39 0 .764-.133 1.06-.376l.106-.096 8.046-7.887-3.949-3.87Zm4.338-1.65a1.903 1.903 0 0 0-2.653 0l-.753.737 3.948 3.87.752-.737c.692-.678.73-1.755.115-2.477l-.115-.124-1.294-1.268Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineEdit
