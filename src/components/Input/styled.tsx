import styled from 'styled-components'

import IconSearch from '@public/images/svg/Icon-Line-Textfield-Icon-Fill-Search.svg'
import IconArrowIosDown from '@public/images/svg/Icon-Line-Arrow-Ios-Down.svg'

type InputProps = {
  icon?: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const Label = styled.p`
  margin-bottom: 8px;

  font-family: inherit;
  font-size: var(--small-text);
  font-weight: 500;
  line-height: 18.2px;
  color: var(--white);
`

/* ========== input =========== */
export const WrapperInput = styled.div`
  position: relative;
  width: inherit;
  height: 48px;
`

export const Input = styled.input<InputProps>`
  padding: 14px;
  padding-left: ${(props) => (props.icon ? '42px' : '14px')};

  width: inherit;
  height: inherit;

  background-color: var(--base-input-bg);

  font-weight: normal;
  font-size: var(--small-text);
  line-height: 19.6px;
  color: var(--text-light);

  border: 1px solid var(--base-dark-line);
  border-radius: 8px;

  outline: none;

  &:focus {
    color: var(--text-lighter);
    border: 1px solid var(--text-lighter);
  }

  &[type='password'] {
    font-size: 32px;
    letter-spacing: 6px;
  }
`

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;

  top: calc(50% - 10px);
  left: 14px;

  width: 20px;
  height: 20px;

  background-color: transparent;
  background: url(${IconSearch.src}) no-repeat;
  background-size: cover;

  border: none;
  border-radius: 0;

  cursor: pointer;

  transition: all ease-out 0.1s;

  &:hover {
    top: calc(50% - 11px);
    left: 13px;
    width: 22px;
    height: 22px;

    transition: all ease-out 0.1s;
  }
`
/* ========== select =========== */
export const SelectTypeFood = styled.select`
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  -ms-appearance: none !important;
  -o-appearance: none !important;
  appearance: none !important;
  &::-ms-expand {
    display: none;
  }

  background: url(${IconArrowIosDown.src}) no-repeat;
  background-position: 14px 50%;
  background-color: var(--base-dark-bg2);
  padding: 14px;
  padding-left: 42px;

  height: 48px;
  min-width: 100px;

  font-family: inherit;
  font-weight: normal;
  font-size: 14px;
  line-height: 18.2px;
  color: var(--white);

  border: 1px solid var(--base-dark-line);
  border-radius: 8px;

  cursor: pointer;
  outline: none;

  direction: rtl;
`

export const OptionTypeFood = styled.option``
