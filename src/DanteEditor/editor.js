import React from 'react'
import Dante from 'Dante2'

export class Editor extends React.Component {

  render() {
    return(
      <>
        <h1>Hey</h1>
        <div style={{
        
          margin: '60px',
        }}>
          <Dante />
        </div>
      </>
    )
  }
}