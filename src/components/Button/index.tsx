import React from 'react'
import * as Styled from './styled'

interface IProps {
  variant?: 'contained' | 'filled'
  value: string
  onClick: () => void
}

export const ButtonCustom: React.FC<IProps> = ({ variant, value, onClick }) => {
  const curClass = variant ? variant : 'contained'
  return (
    <Styled.Btn className={curClass} onClick={onClick}>
      {value}
    </Styled.Btn>
  )
}
