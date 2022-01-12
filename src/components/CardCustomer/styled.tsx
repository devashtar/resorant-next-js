import styled from 'styled-components'

export const ItemCard = styled.li`
  margin-top: 2px;
  background-color: var(--base-dark-bg2);

  width: 100%;
  height: 66px;

  display: grid;
  grid-template-columns: 189px 169px 149px 99px;
  grid-template-rows: auto;

  border: none;
  border-radius: 8px;
`

/* ============ first column ============= */
export const CustomerBlock = styled.div`
  margin-top: 10px;
`

export const InnerCustomerBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NameCustomer = styled.p`
  margin-left: 16px;
  font-family: inherit;
  font-size: var(-small-text);
  font-weight: 500;
  line-height: 20px;
  color: var(--text-lighter);
`

/* ============ second column ============= */
export const MenuBlock = styled.p`
  margin-top: 16px;

  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 20px;
  color: var(--text-lighter);
  padding-right: 25px;
`

/* ============ third column ============= */
export const TotalPaymentBlock = styled.p`
  margin-top: 16px;

  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 20px;
  color: var(--text-lighter);
`

/* ============ fourth column ============= */
export const StatBlock = styled.p<{ curBGColor: string; curColor: string }>`
  background-color: ${(props) => props.curBGColor};
  margin-top: 16px;
  padding: 4px 0px;
  width: 100%;
  height: 26px;
  display: block;

  text-align: center;
  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.curColor};

  border-radius: 30px;
`
