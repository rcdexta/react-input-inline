// Generated with util/create-component.js
import React from 'react'

import TextField from './TextField'

export default {
  title: 'TextField',
}

export const SimpleExample = () => (
  <TextField content="This content can be edited inline" />
)

export const AutoFocus = () => (
  <TextField content="This content will be focused by default" autofocus />
)

export const SelectAllOnFocus = () => (
  <TextField content="Select all content on focus" selectOnFocus />
)

export const DisplayContentMode = () => (
  <TextField
    content="Select all content on focus"
    displayContent="Display different content when not editing"
  />
)

export const DisabledMode = () => (
  <TextField
    content="Read-only content ha!"
    disabled
  />
)
