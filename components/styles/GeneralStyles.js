import styled from 'styled-components'
import { transparentize } from 'polished'
import { colors } from './GlobalStyles'
import { media } from './Mixins'

// headings
export const PageTitle = styled.h1`
  color: ${props => props.textColor};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 2em;
  text-shadow: 0 8px 16px ${transparentize(.5, colors.app.secondary)};
  
  ${media.tabletPortrait`
    text-align: center;  
    font-size: 2.5em;
  `}
`

export const SubHeading = styled(PageTitle)`
  text-transform: unset;
  font-size: .9em;
  margin-top: 2.5em;
  letter-spacing: 2px;
  
  ${media.tabletPortrait`
    font-size: 1.2em;
  `}
`

// content
export const Content = styled.div`
  color: ${colors.app.primary};
  font-size: 1.1em;
  padding: 1em 0;
  
  ${media.tabletPortrait`
    font-size: 1.25em;  
  `}
  
  p {
    margin: 1.2em 0;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: .2px;
    
    a {
      color: ${props => props.accent};
      text-decoration: none;
    }
  }
`
