import React from 'react'
import Image from 'next/image'
import * as Styled from './styled'

interface IProps {
  name: string
  iconUrl: string
  numberOfOrders: number
}

export const CardFoodStat: React.FC<IProps> = ({
  name,
  iconUrl,
  numberOfOrders
}) => {
  return (
    <Styled.ItemCard>
      <Image src={iconUrl} width={56} height={56} layout='fixed' />

      <Styled.WrapperContent>
        <Styled.NameMenu>{name}</Styled.NameMenu>
        <Styled.NumberOfOrdered>
          {numberOfOrders} dishes ordered
        </Styled.NumberOfOrdered>
      </Styled.WrapperContent>
    </Styled.ItemCard>
  )
}
