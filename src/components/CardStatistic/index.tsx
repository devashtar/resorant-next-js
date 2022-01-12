import React from 'react'
import Image from 'next/image'
import IconArrowUp from '@assets/images/svg/IconLineArrowUp'
import IconArrowDown from '@assets/images/svg/IconLineArrowDown'
import * as Styled from './styled'

interface IProps {
  name: string
  iconUrl: string
  percent: string
  stat: string
  isIncrease: boolean
}

export const CardStatistic: React.FC<IProps> = ({
  name,
  iconUrl,
  percent,
  stat,
  isIncrease
}) => {
  return (
    <Styled.ItemCard>
      <Styled.TitleStatWrapper>
        <Styled.TitleIconBlock>
          <Image src={iconUrl} width={24} height={24} />
        </Styled.TitleIconBlock>
        <Styled.Percent isIncrease={isIncrease}>{percent}</Styled.Percent>
        <Styled.ArrowBlock isIncrease={isIncrease}>
          {isIncrease ? <IconArrowUp /> : <IconArrowDown />}
        </Styled.ArrowBlock>
      </Styled.TitleStatWrapper>
      <Styled.Stat>{stat}</Styled.Stat>
      <Styled.Name>{name}</Styled.Name>
    </Styled.ItemCard>
  )
}
