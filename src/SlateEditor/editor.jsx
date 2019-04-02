import React from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'

import value from './value.json'
import { plugins, renderMark } from './marks'
import { renderNode } from './nodes'
import {html} from './serializer'

class RichTextEditor extends React.Component {
  state = {
    value: html.deserialize(`
    <a href="google.com">Google Link</a><p>A bit of content in a Slate editor.</p><pre><code>A bit of content in a Slate editor.</code></pre><p>Googleeeeee</p>`),
    serializedContent: null 
  }

  onChange = ({ value }) => {
    console.log(html.serialize(value))
    this.setState({ value })
  }

  serialize = () => {
    console.log(html.serialize(this.state.value))
    let serializedContent = html.serialize(this.state.value)
    this.setState({ serializedContent })
  }

  render() {
    console.log(this.state.value)
    
    return(
      <>
        <EditorWrapper>
          <Editor 
            value={this.state.value} 
            renderMark={renderMark} 
            renderNode={renderNode}
            onChange={this.onChange} 
            plugins={plugins}
          />
        </EditorWrapper>
        <button onClick={this.serialize}>Serialize</button>
        {this.state.serializedContent && 
          <div>
            <p>{this.state.serializedContent}</p>
          </div>
        }
      </>
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