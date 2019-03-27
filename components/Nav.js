import { Fragment } from 'react'
import Link from 'next/link'
import { StyledNav, NavItem } from './styles/Header'
import { colors } from './styles/GlobalStyles'

export const NavItems = props => {
  return (
    <Fragment>
      <NavItem onClick={props.toggleMenu} accent={colors.accent.mandy}>
        <Link prefetch href='/about'>
          <a>about</a>
        </Link>
      </NavItem>
      <NavItem onClick={props.toggleMenu} accent={colors.accent.danube}>
        <Link prefetch href='/projects'>
          <a>projects</a>
        </Link>
      </NavItem>
      <NavItem onClick={props.toggleMenu} accent={colors.accent.silverTree}>
        <Link prefetch href='/contact'>
          <a>contact</a>
        </Link>
      </NavItem>
    </Fragment>
  )
}

const Nav = props => {
  const className = `nav--collapsed ${props.state.showMenu ? 'ic-cross' : 'ic-menu'}`

  return (
    <StyledNav>
      <NavItems />
      <span onClick={props.toggleMenu} className={className} />
    </StyledNav>
  )
}

export default Nav
