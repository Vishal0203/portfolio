import styled from 'styled-components'
import { media } from './Mixins';
import { colors } from './GlobalStyles';

const HEADER_HEIGHT = '100px';
const LOGO_SIZE = '50px';

export const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  
  ${media.tabletPortrait`
    padding: 0 2em;
  `}
`;

export const Brand = styled.a`
  height: ${LOGO_SIZE};
  width: ${LOGO_SIZE};
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.2em;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  background-color: ${props => props.color};
  
  ${StyledHeader}:hover & .fullname {
    left: calc(${LOGO_SIZE} + 20px);
    opacity: 1;
  }
  
  .initials {
    text-decoration: none;
    color: ${colors.app.secondary};  
  }
  
  .fullname {
    display: none;
    letter-spacing: 3px;
    position: absolute;
    left: 0;
    opacity: 0;
    white-space: nowrap;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.app.primary};
    text-decoration: none;
    transition: opacity .4s, left .4s ease-out;
    
    ${media.tabletPortrait`
      display: block;
    `}
  }
`;

export const StyledNav = styled.ul`
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(3, auto);
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  display: grid;
  
  ${media.tabletPortrait`
    grid-column-gap: 40px;  
  `}
  
  .nav--collapsed {
    display: block;

    ${media.tabletPortrait`
      display: none;
    `}

    &.ic-menu {
      font-size: 1.5em;
    }  
  }
`;

export const NavItem = styled.li`
  display: none;
  letter-spacing: 3px;
  position: relative;
  
  ${media.tabletPortrait`
    display: block;
  `}
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.color};
    transition: transform .2s;
    transform: scale(0);    
  }
  
  &:hover:after {
    transform: scale(1);
  }
  
  a {
    display: inline-block;
    color: ${colors.app.primary};
    text-decoration: none;
    line-height: 3em;  
  }
`;
