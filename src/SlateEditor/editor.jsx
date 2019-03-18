import React from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'

import value from './value.json'
import { plugins, renderMark } from './marks'


class RichTextEditor extends React.Component {
  state = {
    value: Value.fromJSON(value),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return(
      <EditorWrapper>
        <Editor 
          value={this.state.value} 
          renderMark={renderMark} 
          onChange={this.onChange} 
          plugins={plugins}
        />
      </EditorWrapper>
    )
  }
}

export default RichTextEditor

const EditorWrapper = styled.div`
  padding: 10px;
  height: 70vh;
  width: 70vw;
  border: solid gray 1px;
  border-radius: 10px; 
`