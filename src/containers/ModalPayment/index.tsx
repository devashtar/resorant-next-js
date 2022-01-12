import React from 'react'
import { CardOrder } from '@components/CardOrder'
import { WayPaymentBtns } from '@components/WayPaymentBtns'
import { InputField } from '@components/Input'
import { ButtonCustom } from '@components/Button'

import * as Styled from './styled'
import * as SVGStock from '@assets/images/svg'
import { observer } from 'mobx-react-lite'
import { storeNavMenu } from '@store/StoreNavMenu'
import { storeBasket } from '@store/StoreBasket'

export const ModalPayment: React.FC<{}> = observer(() => {
  return (
    <Styled.ModalBlock>
      <Styled.GridWrapper>
        <Styled.ConfirmationBLock>
          <Styled.HeadWrapperBlock>
            <Styled.HeadInnerMarginBlock>
              <Styled.IconWrapperBack
                onClick={() => storeNavMenu.switchDisplayModal()}
              >
                <SVGStock.IconLineBack width={24} height={24} />
              </Styled.IconWrapperBack>
            </Styled.HeadInnerMarginBlock>

            <Styled.HeadTitleBlock>
              <div>
                <Styled.TitleContent>Confirmation</Styled.TitleContent>
                <Styled.SubTitleContent>Orders #34562</Styled.SubTitleContent>
              </div>
              <Styled.AddToOrderBtn
                onClick={() => storeNavMenu.switchDisplayModal()}
              >
                +
              </Styled.AddToOrderBtn>
            </Styled.HeadTitleBlock>
          </Styled.HeadWrapperBlock>

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
        </Styled.ConfirmationBLock>

        <Styled.LineBlock />

        <Styled.PaymentBlock>
          <Styled.HeadWrapperBlock>
            <Styled.HeadInnerMarginBlock></Styled.HeadInnerMarginBlock>

            <Styled.HeadTitleBlock>
              <div>
                <Styled.TitleContent>Payment</Styled.TitleContent>
                <Styled.SubTitleContent>
                  3 payment method available
                </Styled.SubTitleContent>
              </div>
            </Styled.HeadTitleBlock>
          </Styled.HeadWrapperBlock>

          <Styled.BlankOrderWrapper>
            <Styled.TitlePaymentMethod>
              Payment Method
            </Styled.TitlePaymentMethod>
            <WayPaymentBtns />

            <Styled.InputWrapper>
              <InputField
                label='Cardholder Name'
                placeholder='John Travolta'
                value={''}
                onChange={() => ''}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <InputField
                label='Card Number'
                placeholder='1111 2222 3333 4444'
                value={''}
                onChange={() => ''}
              />
            </Styled.InputWrapper>

            <Styled.GridInputWrapper>
              <Styled.InputWrapper>
                <InputField
                  label='Expiration Date'
                  placeholder='02/2023'
                  value={''}
                  onChange={() => ''}
                />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <InputField
                  type='password'
                  label='CCV'
                  placeholder=''
                  value={'123'}
                  onChange={() => ''}
                />
              </Styled.InputWrapper>
            </Styled.GridInputWrapper>
          </Styled.BlankOrderWrapper>
          <Styled.GridInputWrapper>
            <Styled.InputWrapper>
              <InputField
                label='Expiration Date'
                placeholder='02/2023'
                value={''}
                onChange={() => ''}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <InputField
                label='Table no.'
                placeholder=''
                value={'140'}
                onChange={() => ''}
              />
            </Styled.InputWrapper>
          </Styled.GridInputWrapper>
          <Styled.GridBtnsWrapper>
            <ButtonCustom value='Cancel' onClick={() => ''} />
            <ButtonCustom
              variant='filled'
              value='Confirm Payment'
              onClick={() => ''}
            />
          </Styled.GridBtnsWrapper>
        </Styled.PaymentBlock>
      </Styled.GridWrapper>
    </Styled.ModalBlock>
  )
})
