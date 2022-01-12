import styled from 'styled-components'

export const ItemCard = styled.div`
  background-color: var(--base-dark-bg2);
  margin-top: 24px;
  width: 100%;
  height: 56px;

  display: flex;
  flex-wrap: nowrap;
`

export const WrapperContent = styled.div`
  margin-left: 16px;
`

export const NameMenu = styled.p`
  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18px;
  color: var(--text-lighter);
`

export const NumberOfOrdered = styled.p`
  margin-top: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: var(--text-light);
`
