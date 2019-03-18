import React from 'react'

const markHotkey = (options) => {
  const { type, key } = options

  return {
    onKeyDown(event, editor, next) {
      if (!event.ctrlKey || event.key != key) return next()
      event.preventDefault()
      editor.toggleMark(type)
    },
  }
}

export const plugins = [
  markHotkey({ key: 'b', type: 'bold' }),
  markHotkey({ key: '`', type: 'code' }),
  markHotkey({ key: 'i', type: 'italic' }),
  markHotkey({ key: '~', type: 'strikethrough' }),
  markHotkey({ key: 'u', type: 'underline' }),
]

export const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props
  switch (mark.type) {
    case 'bold':
      return <strong {...{ attributes }}>{children}</strong>
    case 'italic':
      return <em {...{ attributes }}>{children}</em>
    case 'code':
      return <code {...{ attributes }}>{children}</code>
    case 'underline':
      return <u {...{ attributes }}>{children}</u>
    case 'strikethrough':
      return <strike {...{ attributes }}>{children}</strike>
    default:
      return next()
  }
}