import React from 'react'
import { storeBasket } from '@store/StoreBasket'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

export const WayDeliveriesBtns: React.FC<{}> = observer(() => {
  return (
    <Styled.WrapperBtns>
      {storeBasket.wayDelivery.map(({ id, name, access, active }) => {
        return (
          <Styled.Btn
            key={id}
            onClick={() => storeBasket.setActiveWayDelivery(id)}
            disabled={!access}
            className={active ? 'active' : ''}
          >
            {name}
          </Styled.Btn>
        )
      })}
    </Styled.WrapperBtns>
  )
})
