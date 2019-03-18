import React from 'react'
import styled from 'styled-components'

class RichTextEditor extends React.Component {

  render() {
    return(
      <EditorWrapper>
        Put editor here
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