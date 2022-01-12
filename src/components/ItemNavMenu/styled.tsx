import styled from 'styled-components'

import { Bool } from './types'

export const WrapperIcon = styled.div<{ urlBGsvg: string }>`
  background: url(${(props) => props.urlBGsvg}) center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 104px;
`

export const BtnIcon = styled.div<{
  isBGLogo?: Bool
  active?: Bool
}>`
  background: ${(props) =>
    props.active
      ? props.isBGLogo
        ? 'var(--primary-fade-color)'
        : 'var(--primary-color)'
      : 'transparent'};
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.active && !props.isBGLogo
      ? '0px 8px 24px rgba(234, 124, 105, 0.32)'
      : 'none'};
  cursor: pointer;
`

export const Icon = styled.div<{ active: Bool; isBGLogo: Bool }>`
  & path {
    fill: ${(props) =>
      props.isBGLogo ? '' : props.active ? 'white' : 'var(--primary-color)'};
  }
`
