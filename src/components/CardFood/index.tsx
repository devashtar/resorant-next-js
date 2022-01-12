import React from 'react'
import Image from 'next/image'
import * as Styled from './styled'

interface IProps {
  id: number
  imageUrl: string
  title: string
  price: number
  quantity: number
}

export const CardFood: React.FC<IProps> = ({
  imageUrl,
  title,
  price,
  quantity
}) => {
  return (
    <Styled.ItemCard>
      <Styled.ImageWrapper>
        <Image src={imageUrl} layout='fill' />
      </Styled.ImageWrapper>
      <Styled.InnerBlock>
        <Styled.ContentBlock>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Price>{`$ ${price}`}</Styled.Price>
          <Styled.Quantity>{`${quantity} Bowls available`}</Styled.Quantity>
        </Styled.ContentBlock>
      </Styled.InnerBlock>
    </Styled.ItemCard>
  )
}
