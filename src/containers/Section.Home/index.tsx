import React, { useCallback, useState } from 'react'
import * as Styled from './styled'
import { InputField } from '@components/Input'
import { CardFood } from '@components/CardFood'
import { WayDeliveriesBtns } from '@components/WayDeliveriesBtns'
import { CardOrder } from '@components/CardOrder'

import { observer } from 'mobx-react-lite'
import { storeNavMenu } from '@store/StoreNavMenu'
import { storeFoodMenu } from '@store/StoreFoodMenu'
import { storeBasket } from '@store/StoreBasket'

export const SectionHome: React.FC<{}> = observer(() => {
  const { arrayCategoriesItem, listKindOfFoodByTime } = storeFoodMenu

  const [height, setHeight] = useState<number>(0)
  const [active, setActive] = useState<number>(0)
  const [valueInputSearch, setValueInputSearch] = useState<string>('')

  const div = useCallback((node) => {
    if (node !== null) {
      const parentEl = node.parentNode.getBoundingClientRect()
      const childEl = node.getBoundingClientRect()
      const accessHeight = parentEl.height - (childEl.top - parentEl.top)
      setHeight(accessHeight)
    }
  }, [])

  const arrayFoodMenu = arrayCategoriesItem.find((_, idx) => idx === active)
    ?.listFoodMenu!

  return (
    <Styled.Home>
      <Styled.ContentContainer>
        <Styled.Header>
          <div>
            <Styled.Title>Jaegar Resto</Styled.Title>
            <Styled.Subtitle>Tuesday, 2 Feb 2021</Styled.Subtitle>
          </div>
          <Styled.InputWrapper>
            <InputField
              icon={true}
              placeholder='Search for food, coffee, etc...'
              value={valueInputSearch}
              onChange={setValueInputSearch}
            />
          </Styled.InputWrapper>
        </Styled.Header>

        <Styled.CategoryList>
          {arrayCategoriesItem.map(({ name }, idx) => {
            return (
              <Styled.ItemCategory
                key={idx}
                className={active === idx ? 'active' : ''}
                onClick={() => setActive(idx)}
              >
                {name}
              </Styled.ItemCategory>
            )
          })}
        </Styled.CategoryList>

        <Styled.HeadOfCards>
          <Styled.TitleHead>Choose Dishes</Styled.TitleHead>
          <InputField element='select' value={''} onChange={() => ''} />
        </Styled.HeadOfCards>

        <Styled.BlockLimitHeight ref={div} limitHeight={height}>
          {height !== 0 ? (
            <Styled.ListCards>
              {arrayFoodMenu.map((item) => {
                return (
                  <div onClick={() => storeBasket.addOrIncreaseOrder(item)}>
                    <CardFood key={item.id} {...item} />
                  </div>
                )
              })}
            </Styled.ListCards>
          ) : (
            'loading...'
          )}
        </Styled.BlockLimitHeight>
      </Styled.ContentContainer>

      <Styled.BarMenu>
        <Styled.PurchaseOrderNumber>Orders #34562</Styled.PurchaseOrderNumber>

        <WayDeliveriesBtns />

        <Styled.TitleOrderCardList>
          <Styled.NameColumn>Item</Styled.NameColumn>
          <Styled.NameColumn>Qty</Styled.NameColumn>
          <Styled.NameColumn>Price</Styled.NameColumn>
        </Styled.TitleOrderCardList>

        <Styled.ListOrderWrapper
          activatePadding={storeBasket.orders.length > 3}
        >
          {storeBasket.orders.map((item) => {
            return <CardOrder {...item} />
          })}
        </Styled.ListOrderWrapper>

        <Styled.BlockPayInformation>
          <Styled.InfoItem>
            <Styled.InfoItemTitle>Discount</Styled.InfoItemTitle>
            <Styled.InfoItemMoney>$0</Styled.InfoItemMoney>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoItemTitle>Sub Total</Styled.InfoItemTitle>
            <Styled.InfoItemMoney>
              ${storeBasket.totalPrice}
            </Styled.InfoItemMoney>
          </Styled.InfoItem>
        </Styled.BlockPayInformation>

        <Styled.ContinuePaymentBtn
          disabled={storeBasket.orders.length === 0}
          onClick={() => storeNavMenu.switchDisplayModal()}
        >
          Continue to Payment
        </Styled.ContinuePaymentBtn>
      </Styled.BarMenu>
    </Styled.Home>
  )
})
