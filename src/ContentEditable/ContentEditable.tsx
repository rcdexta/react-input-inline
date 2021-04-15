import './ContentEditable.scss'

import * as React from 'react'

import {IContentEditableProps, IContentEditableState} from './ContentEditable.types'

class ContentEditable extends React.Component<IContentEditableProps, {}> {
  static defaultProps: Partial<IContentEditableProps> = {
    disabled: false,
    autofocus: false,
    selectOnFocus: false,
    onKeyDown: () => {},
    onKeyPress: () => {},
    style: {},
  }

  state = { editing: false }

  private elem: HTMLSpanElement | null

  shouldComponentUpdate(
    nextProps: IContentEditableProps,
    nextState: IContentEditableState
  ) {
    return (
      nextProps.content !== this.props.content ||
      nextProps.disabled !== this.props.disabled ||
      nextState.editing !== this.state.editing
    )
  }

  selectAll = () => {
    let sel: Selection, range: Range
    if (window.getSelection && document.createRange) {
      range = document.createRange()
      range.selectNodeContents(this.elem)
      sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  handleKeyDown = (evt: React.KeyboardEvent) => {
    //exit edit mode on escape key
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.elem.blur()
    }
  }

  finishEditing = () => {
    const newValue = this.elem && this.elem.innerText
    this.setState({ editing: false })
    this.props.onChange(newValue)
  }

  startEditing = () => {
    const { disabled, selectOnFocus } = this.props
    !disabled &&
      this.setState({ editing: true }, () => selectOnFocus && this.selectAll())
  }

  componentDidMount() {
    if (this.props.autofocus) {
      this.elem.focus()
      this.startEditing()
    }
  }

  content = (): string => {
    const { content, displayContent, } = this.props
    return this.state.editing
      ? content
      : displayContent
      ? displayContent
      : content
  }

  render() {
    const { style, disabled, onKeyPress } = this.props
    return (
      <span
        className="rc-content-editable"
        suppressContentEditableWarning
        ref={(elem) => (this.elem = elem)}
        contentEditable={!disabled}
        placeholder="click to edit"
        dangerouslySetInnerHTML={{ __html: this.content() }}
        onFocus={this.startEditing}
        onClick={this.startEditing}
        onBlur={this.finishEditing}
        onKeyDown={this.handleKeyDown}
        style={style}
            onKeyPress={onKeyPress}
        />    
    )
  }
}

export default ContentEditable
