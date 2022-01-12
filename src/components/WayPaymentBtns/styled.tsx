import styled from 'styled-components'

export const WrapperBtns = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: start;
  height: 64px;
`

export const Btn = styled.button`
  position: relative;
  background-color: var(--base-dark-bg2);
  height: 100%;
  width: 101px;
  padding: 10px 0px;

  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  color: var(--base-dark-line);

  border: 1px solid var(--base-dark-line);
  border-radius: 8px;

  cursor: pointer;

  &:nth-child(1n):not(:first-child) {
    margin-left: 8px;
  }

  &.active {
    background-color: var(--base-dark-bg1);
    border: 1px solid var(--white);
    color: var(--white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`

export const IconActive = styled.div<{ urlImage: string }>`
  position: absolute;
  background: center / cover url(${(props) => props.urlImage}) no-repeat;
  top: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
`

export const IconBrandWrapper = styled.div`
  margin: 0 auto;
  width: 24px;
  height: 24px;

  & path {
    stroke: var(--base-dark-line);
  }

  &.active path {
    stroke: var(--white);
  }
`

export const NameBrand = styled.p`
  margin-top: 2px;

  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`
