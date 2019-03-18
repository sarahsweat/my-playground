import React from 'react'
import styled from 'styled-components'

export const Home = () => (
  <HomeWrapper>
    <h1>
      This is my Home Page Component  
    </h1>
  </HomeWrapper>
)

const HomeWrapper = styled.div`
  height: 200px;
  width: 400px;
  text-align: center;
  background-color: yellow;
`