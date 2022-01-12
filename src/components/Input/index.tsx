import React, { useState } from 'react'
import * as Styled from './styled'
import { storeFoodMenu } from '@store/StoreFoodMenu'

interface IProps {
  type?: string
  selectName?: string
  element?: 'input' | 'select'
  icon?: boolean
  placeholder?: string
  label?: string
  value: string
  onChange: (str: string) => void
  onSearch?: (str: string) => void
}

export const InputField: React.FC<IProps> = ({
  type,
  selectName,
  element,
  icon,
  placeholder,
  label,
  value,
  onChange,
  onSearch
}) => {
  const [focused, setFocused] = useState(false)
  const requiredElement = !element ? 'input' : element

  const checkValue = (str: string) => {
    setFocused(false)
    if (str.trim() === '') onChange('')
  }

  const HandlerClickByIcon = () => {
    if (onSearch === undefined || value === '') return
    onSearch(value)
  }

  return (
    <Styled.Wrapper>
      {label && <Styled.Label>{label}</Styled.Label>}
      {requiredElement === 'input' ? (
        <Styled.WrapperInput>
          <Styled.Input
            type={type || 'text'}
            icon={icon}
            value={value}
            placeholder={(!focused && placeholder) || ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={(e) => checkValue(e.target.value)}
          />
          {icon && <Styled.IconBtn onClick={HandlerClickByIcon} />}
        </Styled.WrapperInput>
      ) : requiredElement === 'select' ? (
        <Styled.SelectTypeFood>
          {selectName ? (
            <Styled.OptionTypeFood value={selectName}>
              {selectName}
            </Styled.OptionTypeFood>
          ) : (
            storeFoodMenu.listKindOfFoodByTime.map((name, idx) => {
              return (
                <Styled.OptionTypeFood key={idx} value={name}>
                  {name}
                </Styled.OptionTypeFood>
              )
            })
          )}
        </Styled.SelectTypeFood>
      ) : (
        ''
      )}
    </Styled.Wrapper>
  )
}
