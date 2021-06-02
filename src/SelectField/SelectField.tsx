import './SelectField.scss'

import React from 'react'

import { ISelectFieldProps } from './SelectField.types'

class SelectField extends React.Component<ISelectFieldProps, {}> {
  static defaultProps: Partial<ISelectFieldProps> = {
    disabled: false,
    placeholder: 'Select Option',
    value: undefined,
    onChange: () => {},
  }

  shouldComponentUpdate(nextProps: ISelectFieldProps) {
    return (
      nextProps.disabled !== this.props.disabled ||
      nextProps.value !== this.props.value ||
      nextProps.options !== this.props.options
    )
  }

  handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(
      evt.target.value === 'undefined' ? undefined : evt.target.value
    )
  }

  render() {
    const { options, disabled, value, placeholder } = this.props
    return (
      <span className="inline-select-span">
        {value ? options[value] : placeholder}
        {!disabled && (
          <select
            className="inline-select"
            onChange={this.handleChange}
            value={value}
          >
            <option value="undefined" key="none">
              None
            </option>
            {Object.keys(options).map((key) => {
              const val = options[key]
              return (
                <option value={key} key={key}>
                  {val}
                </option>
              )
            })}
          </select>
        )}
      </span>
    )
  }
}

export default SelectField
