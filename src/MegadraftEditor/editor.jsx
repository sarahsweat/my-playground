import React from "react";
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
require('megadraft/dist/css/megadraft.css');
import './megadraft.css'

export class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: editorStateFromRaw(null) }
  }

  onChange = (editorState) => {
    this.setState({editorState});
  }

  onSaveClick = () => {
    const {editorState} = this.state;
    const content = editorStateToJSON(editorState);
    console.log(content);
  }

  render() {
    return (
      <div>
        <h1>Megadraft Editor</h1>
        <div style={{
          margin: '5px',
          padding: '5px',
          border: 'solid black 1px'
        }}>
          <MegadraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
        <button onClick={this.onSaveClick}>Click me</button>
      </div>
    )
  }
}