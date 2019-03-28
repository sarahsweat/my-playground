import React from 'react'
import { MyContext } from './Component1'
 
const Component3 = () => {
  return (
    <MyContext.Consumer>
      {({message}) => <>
        <h3>Component 3</h3>
        message: <h3>{message}</h3>
      </>}
    </MyContext.Consumer>
  )
}
 
export default Component3
 
Component3.displayName = "Component3"