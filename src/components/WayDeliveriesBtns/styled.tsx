import styled from 'styled-components'

export const WrapperBtns = styled.div`
  display: flex;
  justify-content: start;
  height: 34px;
`

export const Btn = styled.button`
  background-color: var(--base-dark-bg2);
  padding: 7px 12px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  color: var(--primary-color);

  border: 1px solid var(--primary-color);
  border-radius: 8px;

  cursor: pointer;

  &:nth-child(1n):not(:first-child) {
    margin-left: 8px;
  }

  &.active {
    background-color: var(--primary-color);
    color: var(--white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`
