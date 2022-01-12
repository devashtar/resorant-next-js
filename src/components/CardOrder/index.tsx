import React from 'react'
import Image from 'next/image'
import { InputField } from '@components/Input'
import { IconLineTrash } from '@assets/images/svg'
import { storeBasket } from '@store/StoreBasket'
import * as Styled from './styled'

export interface IOrder {
  id: number
  imageUrl: string
  title: string
  price: number
  quantity: number
}

interface IProps {
  order: IOrder
  amount: number
  comment: string
}

// amount - количество заказов текущего блюда
// quantity - максимально возможное количество заказов текущего блюда

export const CardOrder: React.FC<IProps> = (props) => {
  const { order, amount, comment } = props

  const setQty = (val: string) => {
    if (val.trim() === '') return storeBasket.removeOrder(order.id)
    const num = +val
    const newQuantity =
      num > order.quantity ? order.quantity : num === 0 ? 1 : num
    storeBasket.setAmountOrder(order.id, newQuantity)
  }

  const changeQty = (val: string) => {
    if (!/^\d*$/.test(val)) return
    const num = +val
    const newQuantity = num > order.quantity ? order.quantity : num
    storeBasket.setAmountOrder(order.id, newQuantity)
  }

  const handlerOnChange = (str: string) => storeBasket.setComment(order.id, str)

  return (
    <Styled.CardWrapper>
      <Styled.ItemBlock>
        <Styled.ItemWrapper>
          <Styled.ImageWrapper>
            <Image src={order.imageUrl} layout='fill' />
          </Styled.ImageWrapper>
          <Styled.ContentBlock>
            <Styled.Item>{order.title}</Styled.Item>
            <Styled.Price>${order.price}</Styled.Price>
          </Styled.ContentBlock>
        </Styled.ItemWrapper>
      </Styled.ItemBlock>

      <Styled.QtyInputBlock
        type='text'
        value={amount}
        onChange={(e) => changeQty(e.target.value)}
        onBlur={(e) => setQty(e.target.value)}
      />

      <Styled.PriceBlock>
        <Styled.TotalCurPositionPrice>
          ${(order.price * amount).toFixed(2)}
        </Styled.TotalCurPositionPrice>
      </Styled.PriceBlock>

      <Styled.CommentInputBlock>
        <InputField
          type='text'
          value={comment}
          placeholder='Order Note...'
          onChange={handlerOnChange}
        />
      </Styled.CommentInputBlock>

      <Styled.deleteBlockBtn onClick={() => storeBasket.removeOrder(order.id)}>
        <Styled.IconDeleteWrapper>
          <IconLineTrash width={20} height={20} />
        </Styled.IconDeleteWrapper>
      </Styled.deleteBlockBtn>
    </Styled.CardWrapper>
  )
}
