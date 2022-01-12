import styled from 'styled-components'

export const CardWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 106px;
  display: grid;
  grid-template-columns: 1fr 48px 48px;
  grid-template-rows: 48px 48px;
  gap: 10px 16px;
  grid-template-areas: 'item qty price' 'comment comment delete';

  &:last-child {
    margin-bottom: 24px;
  }
`

/* =========== item =========== */
export const ItemBlock = styled.div`
  height: 100%;
  grid-area: 'item';
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ItemWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-wrap: nowrap;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 40px;
`

export const ContentBlock = styled.div`
  margin-left: 8px;
  height: 100%;
  width: 140px;
`

export const Item = styled.p`
  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18px;
  color: var(--white);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Price = styled.p`
  margin-top: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: var(--text-light);
`

/* =========== qty =========== */
export const QtyInputBlock = styled.input`
  grid-area: 'qty';
  height: 100%;
  width: 100%;
  background-color: var(--base-input-bg);

  text-align: center;

  border: none;
  border-radius: 8px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--white);

  outline: none;
`

/* =========== price =========== */
export const PriceBlock = styled.div`
  grid-area: 'price';
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const TotalCurPositionPrice = styled.p`
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--white);
`

/* =========== comment =========== */
export const CommentInputBlock = styled.div`
  grid-area: comment;
  height: 100%;
  width: 100%;
`

/* =========== delete =========== */
export const deleteBlockBtn = styled.button`
  grid-area: delete;

  position: relative;

  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--primary-color);
  border-radius: 8px;

  cursor: pointer;
  outline: none;
`

export const IconDeleteWrapper = styled.div`
  & path {
    fill: var(--primary-color);
  }
`
