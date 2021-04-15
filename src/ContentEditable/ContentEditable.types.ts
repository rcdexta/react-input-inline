export interface IContentEditableProps {
    content: string
    disabled?: boolean
    style?: object 
    displayContent?: string
    autofocus?: boolean
    selectOnFocus?: boolean
    onChange?: (newValue: string) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
    onKeyPress?: (event: React.KeyboardEvent) => void    
  }
  
  export interface IContentEditableState {
    editing: boolean
  }