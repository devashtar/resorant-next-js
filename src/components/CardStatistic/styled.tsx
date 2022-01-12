import styled from 'styled-components'

export const ItemCard = styled.div`
  background-color: var(--base-dark-bg2);
  padding: 16px;
  width: 100%;
  height: 143px;

  border: none;
  border-radius: 8px;
`

export const TitleStatWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`

export const TitleIconBlock = styled.div`
  background-color: var(--base-dark-bg1);
  width: 38px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`

export const Percent = styled.p<{ isIncrease: boolean }>`
  margin-left: 12px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: ${(props) =>
    props.isIncrease ? 'var(--accent-green)' : 'var(--accent-red)'};
`

export const ArrowBlock = styled.div<{ isIncrease: boolean }>`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  background-color: ${(props) =>
    props.isIncrease
      ? 'rgba(136, 224, 145, 0.24)'
      : 'rgba(255, 100, 113, 0.24)'};

  & path {
    fill: ${(props) =>
      props.isIncrease ? 'var(--accent-green)' : 'var(--accent-red)'};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`

export const Stat = styled.h1`
  margin-top: 8px;

  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  line-height: 39px;
  color: var(--white);
`

export const Name = styled.p`
  margin-top: 8px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-light);
`
