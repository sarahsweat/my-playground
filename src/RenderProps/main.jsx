import React from 'react'
import styled from 'styled-components'

//----------------------------------------------------------------------------------
// Reusable Toggler Component
//----------------------------------------------------------------------------------

class Toggler extends React.Component {
  state = {
    toggled: false
  }

  toggle = () => {
    this.setState(state => ({toggled: !state.toggled}))
  }

  render() {
    const { toggled } = this.state 
    return this.props.children(toggled, this.toggle)
  }
}

//----------------------------------------------------------------------------------
// First Use
//----------------------------------------------------------------------------------

export const First = () => (
  <HomeWrapper>
    <h1> This is my First Component </h1>
    <Toggler>
      {(toggled, toggle) => <ToggledWindow toggled={toggled} toggle={toggle}/>}
    </Toggler>
  </HomeWrapper>
)


const ToggledWindow = ({toggled, toggle}) => (
  <div>
    <button onClick={toggle}>Click to toggle</button>
    <p>This is toggled {toggled ? 'ON' : 'OFF'}</p>
  </div>
)  

//----------------------------------------------------------------------------------
// Second Use
//----------------------------------------------------------------------------------

export const Second = () => (
  <HomeWrapper style={{backgroundColor: 'pink'}}>
    <h1> This is my Second Component </h1>
    <Toggler>
      {(toggled, toggle) => <ToggledWindow2 toggled={toggled} toggle={toggle}/>}
    </Toggler>
  </HomeWrapper>
)


const ToggledWindow2 = ({toggled, toggle}) => (
  <div style={{backgroundColor: toggled ? 'green' : 'red', color: 'white'}}>
    <button onClick={toggle}>Toggle</button>
    <p>{toggled ? 'TOGGLED ON' : 'TOGGLED OFF'}</p>
  </div>
) 

//----------------------------------------------------------------------------------
// Styled component in both
//----------------------------------------------------------------------------------

const HomeWrapper = styled.div`
  height: 200px;
  width: 400px;
  text-align: center;
  background-color: yellow;
`