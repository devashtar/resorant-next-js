import React from 'react'
import Image from 'next/image'
import * as Styled from './styled'

interface IProps {
  name: string
  iconUrl: string
  menu: string
  totalPayment: number
  status: 'Completed' | 'Preparing' | 'Pending'
}

export const CardCustomer: React.FC<IProps> = ({
  name,
  iconUrl,
  menu,
  totalPayment,
  status
}) => {
  const palettes = {
    Completed: {
      curBGColor: 'rgba(107, 226, 190, 0.24)',
      curColor: 'var(--accent-green)'
    },
    Preparing: {
      curBGColor: 'rgba(146, 144, 254, 0.2)',
      curColor: 'var(--accent-red)'
    },
    Pending: {
      curBGColor: 'rgba(255, 181, 114, 0.2)',
      curColor: 'var(--accent-orange)'
    }
  }

  const curPalette = palettes[status]

  return (
    <Styled.ItemCard>
      <Styled.CustomerBlock>
        <Styled.InnerCustomerBlock>
          <Image src={iconUrl} width={32} height={32} layout='fixed' />
          <Styled.NameCustomer>{name}</Styled.NameCustomer>
        </Styled.InnerCustomerBlock>
      </Styled.CustomerBlock>
      <Styled.MenuBlock>{menu}</Styled.MenuBlock>
      <Styled.TotalPaymentBlock>${totalPayment}</Styled.TotalPaymentBlock>
      <Styled.StatBlock {...curPalette}>{status}</Styled.StatBlock>
    </Styled.ItemCard>
  )
}
