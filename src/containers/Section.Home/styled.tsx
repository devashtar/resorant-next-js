import styled from 'styled-components'

export const Home = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: inherit;
  gap: 24px;
`

export const ContentContainer = styled.div`
  padding-top: 24px;
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const InputWrapper = styled.div`
  max-width: 240px;
  width: 100%;
`

export const CategoryList = styled.ul`
  list-style-type: none;

  margin-top: 24px;

  width: 100%;
  height: 33px;

  display: flex;

  border-bottom: 1px solid var(--base-dark-line);
`

export const ItemCategory = styled.li`
  position: relative;
  align-items: stretch;

  &:nth-child(1n):not(:first-child) {
    margin-left: 32px;
  }

  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  color: var(--white);

  cursor: pointer;

  &.active {
    color: var(--primary-color);

    &::after {
      position: absolute;
      background-color: var(--primary-color);
      content: '';

      bottom: -1.5px;
      left: 0;

      display: block;
      border-radius: 2px;

      width: 60%;
      height: 3px;
    }
  }
`

export const HeadOfCards = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleHead = styled.h2`
  width: 400%;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`

export const BlockLimitHeight = styled.div<{ limitHeight: number }>`
  width: 100%;
  height: ${(props) => props.limitHeight}px;
  padding-bottom: 24px;
  overflow: auto;
`

export const ListCards = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 24px;
`

// ========== RIGHT BLOCK ============
export const BarMenu = styled.div`
  background-color: var(--base-dark-bg2);
  padding: 24px;
  width: 410px;
  height: 100%;
`

export const PurchaseOrderNumber = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--white);
  margin-bottom: 24px;
`

export const TitleOrderCardList = styled.div`
  margin-top: 24px;
  height: 22px;
  display: grid;
  grid-template-columns: 1fr 48px 48px;
  grid-template-rows: auto;
  gap: 16px;
`

export const NameColumn = styled.p`
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  color: var(--white);

  &:first-child {
    text-align: start;
  }

  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    text-align: end;
  }
`

export const ListOrderWrapper = styled.div<{ activatePadding?: boolean }>`
  padding-right: ${(props) => (props.activatePadding ? '3' : '0')}px;
  margin-top: 24px;
  width: 100%;
  height: 454px;
  border-top: 1px solid var(--base-input-bg);
  border-bottom: 1px solid var(--base-input-bg);

  overflow: auto;
`

export const BlockPayInformation = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 62px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoItemTitle = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: var(--small-text);
  line-height: 20px;
  color: var(--text-light);
`

export const InfoItemMoney = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
`

export const ContinuePaymentBtn = styled.button`
  margin-top: 42px;
  width: 100%;
  height: 48px;
  background-color: var(--primary-color);

  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600px;
  line-height: 20px;
  color: var(--white);

  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`
