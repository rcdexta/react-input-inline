// Generated with util/create-component.js
import React from 'react'

import SelectField from './SelectField'

export default {
  title: 'SelectField',
}

interface ITFState {
  value: string
}

interface ITFProps {
  value?: string
  disabled?: boolean
}

class SelectFieldStory extends React.Component<ITFProps, ITFState> {
  state = { value: this.props.value }

  onChange = (value: string) => {
    this.setState({ value: value })
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <SelectField
          placeholder="Select Product"
          value={this.state.value}
          onChange={this.onChange}
          disabled={this.props.disabled}
          options={{
            p1: 'Product 1',
            p2: 'Product 2 ',
            p3: 'Product 3',
          }}
        />
      </div>
    )
  }
}

export const SimpleCase = () => (
  <div style={{ width: 300 }}>
    <SelectFieldStory />
    <br />
    <SelectFieldStory value={'p3'} />
    <br />
    <SelectFieldStory value={'p2'} disabled />
  </div>
)
