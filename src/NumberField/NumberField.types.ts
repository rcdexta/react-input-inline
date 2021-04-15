export interface INumberFieldProps {
    value: number
    displayContent?: string
    disabled?: boolean
    selectOnFocus?: boolean
    onChange(newValue: number) : void
  }
  