import React from 'react'
import styled from 'styled-components'

export default class BasicToggler extends React.Component {
  state = {
    toggled: false
  }

  toggle = () => {
    this.setState(state => ({toggled: !state.toggled}))
  }

  render() {
    const { toggled } = this.state 
    return(
      <HomeWrapper>
        <h1> This is my Main Component </h1>
        <div>
          <button onClick={this.toggle}>Click to toggle</button>
          <p>This is toggled {toggled ? 'ON' : 'OFF'}</p>
        </div>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  height: 200px;
  width: 400px;
  text-align: center;
  background-color: yellow;
`