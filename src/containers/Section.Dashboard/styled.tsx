import styled from 'styled-components'

export const Dashboard = styled.div`
  padding: 24px 0px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 372px;
  grid-template-rows: auto;
  gap: 24px;
`

/* ============== ContentContainer =============== */
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 89px 143px 1fr;
  gap: 24px;
  grid-template-areas: 'title title title' 'totalRevenue totalDishOrdered totalCustomer' 'orderReport orderReport orderReport';

  & > div:nth-child(2) {
    grid-area: totalRevenue;
  }
  & > div:nth-child(3) {
    grid-area: totalDishOrdered;
  }
  & > div:nth-child(4) {
    grid-area: totalCustomer;
  }
`

export const TitleBlock = styled.div`
  grid-area: title;
  border-bottom: 1px solid var(--base-dark-line);
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 39px;
`

export const Subtitle = styled.p`
  color: var(--text-lighter);
  font-weight: normal;
  line-height: 22px;
`

export const OrderReportBlock = styled.div`
  grid-area: orderReport;
  background-color: var(--base-dark-bg2);
  width: 100%;
  height: 100%;

  border-radius: 8px;
`

export const HeadOrderBlock = styled.div`
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 16px;
  width: 100%;
  height: 97px;

  border-bottom: 1px solid var(--base-input-bg);
`

export const HeadOrderInnerTitleWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeadTitle = styled.h2`
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--white);
`

export const FilterOrderBtn = styled.button`
  position: relative;
  background-color: transparent;
  padding: 13.5px 14px 13.5px 44px;

  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18.2px;
  color: var(--white);

  border: 1px solid var(--base-input-bg);
  border-radius: 8px;

  cursor: pointer;
  outline: none;

  &:hover {
    border: 1px solid var(--white);
  }

  & > svg {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 14px;
    top: calc(50% - 10px);

    path {
      fill: var(--white);
    }
  }
`

export const ColumnsTitleWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 36px;

  display: grid;
  grid-template-columns: 189px 169px 149px 99px;
  grid-template-rows: auto;
`

export const ColumnName = styled.p`
  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 600;
  line-height: 20px;
  color: var(--white);
`

export const CustomerList = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  padding: 0px 24px;
  display: block;
  width: 100%;
  height: 369px;

  overflow: auto;
`

/* ============== BarMenu =============== */
export const BarMenu = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 429px 1fr;
  gap: 24px;

  border-radius: 16px;

  overflow: hidden;
`

export const MostOrderedBlock = styled.div`
  background-color: var(--base-dark-bg2);
  padding: 24px;
  width: 100%;
  border-radius: 16px;
`

export const HeadMOB = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeadMOBTitle = styled.div`
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--white);
`

export const WrapperListMOB = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 316px;

  border-top: 1px solid var(--base-input-bg);

  overflow: auto;
`

export const AbsoluteBtn = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`

export const MostTypeOfOrderBlock = styled.div`
  background-color: var(--base-dark-bg2);
  width: 100%;

  border-radius: 16px;
`

export const HeadMTOOB = styled.div`
  padding: 24px 24px 16px 24px;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--base-input-bg);
`

export const ContentWrapperMTOOB = styled.div`
  padding: 32px 32px 0px 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListStatMTOOB = styled.ul`
  list-style-type: none;
`

export const ItemStatMTOOB = styled.li`
  margin-top: 16px;
  position: relative;
  padding-left: 27px;

  &:nth-child(1)::before {
    background-color: var(--accent-red);
  }
  &:nth-child(2)::before {
    background-color: var(--accent-orange);
  }
  &:nth-child(3)::before {
    background-color: var(--accent-blue);
  }

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    display: block;
    width: 18px;
    height: 18px;

    border-radius: 50%;
  }
`

export const ItemStatMTOOBName = styled.p`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--white);
`

export const ItemStatMTOOBOrderStat = styled.p`
  margin-top: 2px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--text-light);
`
