import React from 'react'
import Image from 'next/image'
import * as Styled from './styled'

export const SectionDiscount: React.FC<{}> = () => {
  return (
    <Styled.Discount>
      <Styled.Img src='https://www.meme-arsenal.com/memes/4c78e23f7ef8d5224aad7a5683e01ebe.jpg' />
    </Styled.Discount>
  )
}
