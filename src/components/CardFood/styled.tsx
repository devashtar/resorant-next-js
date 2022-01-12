import styled from 'styled-components'

export const ItemCard = styled.li`
  position: relative;
  width: 192px;
  height: 260px;
  display: flex;
  align-items: flex-end;

  cursor: pointer;

  &:hover > div:last-child {
    border: 1px solid var(--primary-color);
    transition: border ease-out 0.2s;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 66px);
  width: 132px;
  height: 132px;
`

export const InnerBlock = styled.div`
  background-color: var(--base-dark-bg2);
  padding: 24px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 226px;

  border: 1px solid var(--base-dark-bg2);
  border-radius: 16px;
  transition: border ease-out 0.2s;
`

export const ContentBlock = styled.div`
  text-align: center;
  height: 88px;
`

export const Title = styled.p`
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18.2px;
`

export const Price = styled.p`
  margin-top: 8px;
  font-size: var(--small-text);
  font-weight: 400;
  line-height: 19.6px;
`
export const Quantity = styled.p`
  margin-top: 4px;
  font-size: var(--small-text);
  font-weight: 400;
  color: var(--text-light);
  line-height: 19.6px;
`
