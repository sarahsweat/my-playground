import React from 'react'
import styled from 'styled-components'
import Component2 from './component2'

const defaultValue = {
  message: "This is my message from context"
}

export const MyContext = React.createContext(defaultValue);

export const Component1 = () => (
  <MyContext.Provider value={defaultValue}>
    <HomeWrapper>
      <h1>
        This is Component 1
      </h1>
      <Component2 />
    </HomeWrapper>
  </MyContext.Provider>
)

const HomeWrapper = styled.div`
  width: 550px;
  padding: 10px;
  text-align: center;
  background-color: pink;
`