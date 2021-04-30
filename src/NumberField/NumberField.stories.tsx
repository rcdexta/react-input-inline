// Generated with util/create-component.js
import React from 'react'

import NumberField from './NumberField'

const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currencyDisplay: 'symbol',
  currency: 'USD',
  maximumFractionDigits: 2,
})

export default {
  title: 'NumberField',
}

export const BasicExample = () => <NumberField value={10} />

const TestCurrency = () => {
  const [value, setValue] = React.useState<number>(100000)

  const onChange = (newValue: number) => {
    setValue(newValue)
  }

  return (
    <NumberField
      value={value}
      onChange={onChange}
      valueFormatter={(value) => currencyFormatter.format(value)}
    />
  )
}

export const WithFormmater = () => <TestCurrency />
