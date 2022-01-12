import styled from 'styled-components'

export const Btn = styled.button`
  background-color: transparent;
  width: 100%;
  height: 48px;

  text-align: center;
  font-family: inherit;
  font-size: var(-small-text);
  font-weight: 600;
  color: var(--primary-color);

  border: 1px solid var(--primary-color);
  border-radius: 8px;

  cursor: pointer;
  outline: none;

  &.filled {
    background-color: var(--primary-color);
    color: var(--white);
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
  }
`
