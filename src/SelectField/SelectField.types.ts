export interface ISelectFieldProps {
  value?: string | number
  disabled?: boolean
  placeholder?: string
  onChange: (newValue: string) => void
  options: object
}
