import React from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import Html from 'slate-html-serializer'

import value from './value.json'
import { plugins, renderMark } from './marks'

const html = new Html({
	rules: [{
    deserialize(el, next) {
      if (el.tagName.toLowerCase() === 'p') {
        return {
          kind: 'block',
          type: 'paragraph',
          data: {},
          nodes: next(el.childNodes)
        }
      }
      if (el.tagName.toLowerCase() === 'a') {
        return {
          kind: 'inline',
          type: 'link',
          data: {
            href: el.getAttribute('href')
          },
          nodes: next(el.childNodes)
        }
      }
    }
  }]	
})



class RichTextEditor extends React.Component {
  state = {
    value: html.deserialize(`
    <p>A bit of content in a Slate editor.<p><p>A bit of content in a Slate editor.</p><p>abcede</p>`),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    console.log(this.state.value)
    
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