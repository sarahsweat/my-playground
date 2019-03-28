import React from 'react'

export const renderNode = (props, editor, next) => {
  switch (props.node.type) {
    case 'code':
      return (
        <pre {...props.attributes}>
          <code>{props.children}</code>
        </pre>
      )
    case 'paragraph':
      return (
        <p {...props.attributes} className={props.node.data.get('className')}>
          {props.children}
        </p>
      )
    case 'quote':
      return <blockquote {...props.attributes}>{props.children}</blockquote>
    default:
      return next()
  }
}