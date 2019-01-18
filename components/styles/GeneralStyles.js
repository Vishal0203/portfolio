import styled from 'styled-components'
import { colors } from './GlobalStyles'

// headings
export const PageTitle = styled.h1`
  color: ${props => props.color};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 2.5em;
`

// content
export const Content = styled.div`
  color: ${colors.app.primary};
  font-size: 1.25em;
  margin: 2.5em 0;
  
  .highlight {
    color: ${props => props.accent}
  }
`
