import React from 'react'

const CodeMark = props => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
)

export default CodeMark
