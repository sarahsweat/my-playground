import React from 'react'
import Component3 from './component3'
 
const Component2 = props => {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  )
}
 
export default Component2
 
Component2.displayName = "Component2"