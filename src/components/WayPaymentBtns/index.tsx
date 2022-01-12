import React from 'react'
import { storeBasket } from '@store/StoreBasket'
import IconFillCheckMarkCircle from '@public/images/svg/Icon-Fill-Checkmark-Circle.svg'
import * as Styled from './styled'
import * as SVGStock from '@assets/images/svg'
import { observer } from 'mobx-react-lite'

export const WayPaymentBtns: React.FC<{}> = observer(() => {
  return (
    <Styled.WrapperBtns>
      {storeBasket.wayPayment.map(({ id, name, access, active }) => {
        return (
          <Styled.Btn
            key={id}
            onClick={() => storeBasket.setActiveWayPayment(id)}
            disabled={!access}
            className={active ? 'active' : ''}
          >
            {active && (
              <Styled.IconActive urlImage={IconFillCheckMarkCircle.src} />
            )}
            <Styled.IconBrandWrapper className={active ? 'active' : ''}>
              {listImagesBrands.find((item) => item.id === id)?.component!}
            </Styled.IconBrandWrapper>
            <Styled.NameBrand>{name}</Styled.NameBrand>
          </Styled.Btn>
        )
      })}
    </Styled.WrapperBtns>
  )
})

const listImagesBrands = [
  {
    id: 1,
    component: <SVGStock.IconLineCard width={24} height={24} />
  },
  {
    id: 2,
    component: <SVGStock.IconLinePaypal width={24} height={24} />
  },
  {
    id: 3,
    component: <SVGStock.IconLineWallet width={24} height={24} />
  }
]
