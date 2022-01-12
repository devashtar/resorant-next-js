import React, { useMemo } from 'react'

import IsTrueWrapperIconImage from '@public/images/svg/state-true.svg'
import IsFalseWrapperIconImage from '@public/images/svg/state-false.svg'

import * as Styled from './styled'

import { Bool, TypeCallWrapperIcon } from './types'

export const ItemNavMenu: React.FC<TypeCallWrapperIcon> = ({
  name,
  isBGLogo,
  active,
  IconComponent,
  onClick
}) => {
  const callWrapperIcon = useMemo(
    () => (active: Bool) =>
      active ? IsTrueWrapperIconImage.src : IsFalseWrapperIconImage.src,
    []
  )

  return (
    <Styled.WrapperIcon urlBGsvg={callWrapperIcon(active && !isBGLogo)}>
      <Styled.BtnIcon
        data-name={name}
        isBGLogo={isBGLogo}
        active={active}
        onClick={onClick}
      >
        <Styled.Icon isBGLogo={isBGLogo} active={active}>
          <IconComponent />
        </Styled.Icon>
      </Styled.BtnIcon>
    </Styled.WrapperIcon>
  )
}
