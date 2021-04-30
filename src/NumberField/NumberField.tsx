import * as React from 'react'

import ContentEditable from '../ContentEditable/ContentEditable'
import { INumberFieldProps } from './NumberField.types'

export default class NumberField extends React.Component<
  INumberFieldProps,
  {}
> {
  static defaultProps: Partial<INumberFieldProps> = {
    disabled: false,
    selectOnFocus: true,
  }

  shouldComponentUpdate(nextProps: INumberFieldProps) {
    return (
      nextProps.value !== this.props.value ||
      nextProps.disabled !== this.props.disabled
    )
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (
      String.fromCharCode(e.which) !== '-' &&
      String.fromCharCode(e.which) !== '.' &&
      isNaN(Number(String.fromCharCode(e.which)))
    ) {
      e.preventDefault()
    }
  }

  onChange = (newContent: string) => {
    const newValue = Number(newContent)
    if (!isNaN(newValue)) {
      this.props.onChange(newValue)
    } 
  }

  content = () => {
    const { valueFormatter, value } = this.props
    if (valueFormatter) {
      return valueFormatter(value).toString()
    } else {
      return value.toString()
    }
  }

  render() {
    const { disabled, displayContent, selectOnFocus } = this.props
    return (
      <ContentEditable
        content={this.content()}
        displayContent={displayContent}
        disabled={disabled}
        selectOnFocus={selectOnFocus}
        onChange={this.onChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}
