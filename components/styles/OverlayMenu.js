import styled from 'styled-components'
import { transparentize } from 'polished'
import { media } from './Mixins'
import { colors } from './GlobalStyles'
import OverlayMenu from '../OverlayMenu'
import { NavItem } from './Header'

export const StyledOverlayMenu = styled(OverlayMenu)`
  display: flex;
  position: fixed;
  z-index: 1;
  opacity: 0;
  top: -40%;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  visibility: hidden;
  transition: top .4s, opacity .4s;
  background-color: ${transparentize(.02, colors.bg.shark)};
  
  &.show {
    top: 0;
    opacity: 1;
    visibility: visible;  
  }
  
  ${media.tabletPortrait`
    display: none;
  `}
  
  ${NavItem} {
    margin-bottom: 1em;
  }
`
