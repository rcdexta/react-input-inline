import * as React from 'react'

import { NumberField } from '..'
import { ICurrencyFieldProps } from './CurrencyField.types'

export default class CurrencyField extends React.Component<
  ICurrencyFieldProps,
  {}
> {
  static defaultProps: Partial<ICurrencyFieldProps> = {
    disabled: false,
  }

  humanize = (money: number) => {
    let [dollar, cents] = (money || 0).toFixed(2).split('.')
    let value =
      '$ ' +
      dollar
        .split('')
        .reverse()
        .reduce(function (acc, money, i) {
          return money + (i && !(i % 3) ? ',' : '') + acc
        }, '')
    return parseInt(cents) !== 0 ? [value, cents].join('.') : value
  }

  shouldComponentUpdate(nextProps: ICurrencyFieldProps) {
    return (
      nextProps.value !== this.props.value ||
      nextProps.disabled !== this.props.disabled
    )
  }

  render() {
    const { value, disabled, onChange } = this.props
    return (
      <NumberField
        value={value}
        displayContent={this.humanize(value)}
        disabled={disabled}
        onChange={onChange}
      />
    )
  }
}
