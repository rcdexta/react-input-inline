// Generated with util/create-component.js
import React from 'react'

import CurrencyField from './CurrencyField'

export default {
  title: 'CurrencyField',
}

export const BasicExample = () => <CurrencyField value={10} />

const TestCurrency = () => {
  const [value, setValue] = React.useState<number>(100000)

  const onChange = (newValue: number) => {
    setValue(newValue)
  }
    
  return <CurrencyField value={value} onChange={onChange} />
}

export const LargeCurrency = () => <TestCurrency />
