import React from 'react'
import * as Styled from './styled'
import { storeStatistic } from '@store/StoreStatistic'
import { CardStatistic } from '@components/CardStatistic'
import { CardCustomer } from '@components/CardCustomer'
import { InputField } from '@components/Input'
import { CardFoodStat } from '@components/CardFoodStat'
import { ButtonCustom } from '@components/Button'
import * as SVGStock from '@assets/images/svg'

export const SectionDashboard: React.FC<{}> = () => {
  return (
    <Styled.Dashboard>
      <Styled.ContentContainer>
        <Styled.TitleBlock>
          <Styled.Title>Dashboard</Styled.Title>
          <Styled.Subtitle>Tuesday, 2 Feb 2021</Styled.Subtitle>
        </Styled.TitleBlock>

        {storeStatistic.totals.map((item, idx) => {
          return <CardStatistic key={idx} {...item} />
        })}

        <Styled.OrderReportBlock>
          <Styled.HeadOrderBlock>
            <Styled.HeadOrderInnerTitleWrapper>
              <Styled.HeadTitle>Order Report</Styled.HeadTitle>
              <Styled.FilterOrderBtn>
                <SVGStock.IconLineOption />
                Filter Order
              </Styled.FilterOrderBtn>
            </Styled.HeadOrderInnerTitleWrapper>
            <Styled.ColumnsTitleWrapper>
              <Styled.ColumnName>Customer</Styled.ColumnName>
              <Styled.ColumnName>Menu</Styled.ColumnName>
              <Styled.ColumnName>Total Payment</Styled.ColumnName>
              <Styled.ColumnName>Status</Styled.ColumnName>
            </Styled.ColumnsTitleWrapper>
          </Styled.HeadOrderBlock>
          <Styled.CustomerList>
            {storeStatistic.orderReports.map((item, idx) => {
              return <CardCustomer key={idx} {...item} />
            })}
          </Styled.CustomerList>
        </Styled.OrderReportBlock>
      </Styled.ContentContainer>
      <Styled.BarMenu>
        <Styled.MostOrderedBlock>
          <Styled.HeadMOB>
            <Styled.HeadMOBTitle>Most Ordered</Styled.HeadMOBTitle>
            <div style={{ width: '95px' }}>
              <InputField
                element='select'
                selectName='Today'
                value=''
                onChange={() => ''}
              />
            </div>
          </Styled.HeadMOB>
          <Styled.WrapperListMOB>
            {storeStatistic.mostOrdered.map((item, idx) => {
              return <CardFoodStat key={idx} {...item} />
            })}
            <Styled.AbsoluteBtn>
              <ButtonCustom
                variant='contained'
                value='View All'
                onClick={() => ''}
              />
            </Styled.AbsoluteBtn>
          </Styled.WrapperListMOB>
        </Styled.MostOrderedBlock>
        <Styled.MostTypeOfOrderBlock>
          <Styled.HeadMTOOB>
            <Styled.HeadMOBTitle>Most Type of Order</Styled.HeadMOBTitle>
            <div style={{ width: '95px' }}>
              <InputField
                element='select'
                selectName='Today'
                value=''
                onChange={() => ''}
              />
            </div>
          </Styled.HeadMTOOB>
          <Styled.ContentWrapperMTOOB>
            <SVGStock.Diagram />
            <Styled.ListStatMTOOB>
              {storeStatistic.mostTypeOrdered.map(({ name, customers }) => {
                return (
                  <Styled.ItemStatMTOOB>
                    <Styled.ItemStatMTOOBName>{name}</Styled.ItemStatMTOOBName>
                    <Styled.ItemStatMTOOBOrderStat>
                      {customers} customers
                    </Styled.ItemStatMTOOBOrderStat>
                  </Styled.ItemStatMTOOB>
                )
              })}
            </Styled.ListStatMTOOB>
          </Styled.ContentWrapperMTOOB>
        </Styled.MostTypeOfOrderBlock>
      </Styled.BarMenu>
    </Styled.Dashboard>
  )
}
