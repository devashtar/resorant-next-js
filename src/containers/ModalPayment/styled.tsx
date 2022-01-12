import styled from 'styled-components'

export const ModalBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;

  z-index: 1000;
`

export const GridWrapper = styled.div`
  background-color: var(--base-dark-bg2);
  padding: 0px 23px;
  width: 814px;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'confirmation line payment';
  gap: 24px;

  border-radius: 16px;
`

export const HeadWrapperBlock = styled.div`
  width: 100%;
  height: 109px;
`

export const HeadInnerMarginBlock = styled.div`
  width: 100%;
  height: 40px;
`

export const HeadTitleBlock = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContent = styled.h1`
  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  line-height: 39.2px;
  color: var(--white);
`

export const SubTitleContent = styled.p`
  margin-top: 8px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--text-light);
`

/* ============ confirmation ============= */
export const ConfirmationBLock = styled.div`
  grid-area: confirmation;
  padding: 24px 0px;
  width: 100%;
  height: 100%;
`

export const IconWrapperBack = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  & path {
    stroke: var(--white);
  }
`

export const AddToOrderBtn = styled.button`
  background-color: var(--primary-color);

  width: 48px;
  height: 48px;

  text-align: center;
  font-size: 20px;
  line-height: 20px;
  color: var(--white);

  border: none;
  border-radius: 8px;

  cursor: pointer;
  outline: none;
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

/* ============ line ============= */
export const LineBlock = styled.div`
  grid-area: line;
  background-color: var(--base-input-bg);
  width: 100%;
  height: 100%;
`

/* ============ payment ============= */
export const PaymentBlock = styled.div`
  grid-area: payment;
  padding: 24px 0px;
  width: 100%;
  height: 100%;
`

export const BlankOrderWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 426px;
  border-top: 1px solid var(--base-input-bg);
  border-bottom: 1px solid var(--base-input-bg);

  overflow: auto;
`

export const TitlePaymentMethod = styled.h2`
  margin-top: 24px;
  font-family: inherit;
  font-size: 20px;
  font-size: 600;
  line-height: 28px;
  color: var(--white);
`

export const GridInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 13px;
`

export const InputWrapper = styled.div`
  margin-top: 16px;
`

export const GridBtnsWrapper = styled.div`
  margin-top: 89px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 8px;
`
