import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconLineWallet = ({
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
      d='M16.188 2.5C19.398 2.5 22 5.161 22 8.444v7.112c0 3.283-2.602 5.944-5.812 5.944H7.812C4.602 21.5 2 18.839 2 15.556V8.444C2 5.16 4.602 2.5 7.812 2.5h8.376Zm0 1.487H7.812c-2.407 0-4.358 1.995-4.358 4.457v7.112c0 2.462 1.951 4.458 4.358 4.458h8.376c2.407 0 4.358-1.996 4.358-4.458v-.277H17.35c-1.842 0-3.334-1.526-3.335-3.41 0-1.82 1.395-3.307 3.152-3.405l.183-.005h3.196v-.015c0-2.39-1.838-4.34-4.147-4.452l-.211-.005Zm4.358 5.958h-3.195c-1.04.001-1.883.862-1.883 1.924 0 1.012.765 1.841 1.735 1.918l.147.006h3.196V9.945Zm-2.752 1.12c.402 0 .727.333.727.743a.738.738 0 0 1-.628.737l-.099.007h-.302a.735.735 0 0 1-.727-.744c0-.376.274-.687.628-.736l.1-.007h.301Zm-5.44-4.068c.401 0 .727.333.727.744a.738.738 0 0 1-.628.736l-.1.007H7.123a.735.735 0 0 1-.727-.743c0-.377.274-.688.628-.737l.099-.007h5.232Z'
      fill='#3B5162'
    />
  </svg>
)

export default SvgIconLineWallet
