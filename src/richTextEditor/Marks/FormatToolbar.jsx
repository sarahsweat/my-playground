import React from 'react'
import styled from 'styled-components'

const FormatToolbar = props => <FormatToolbarContainer>{props.children}</FormatToolbarContainer>

export default FormatToolbar

const FormatToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid 1px #cfcfcf;
  padding: 5px;

  > * {
    margin-bottom: 7px;
  }
`
