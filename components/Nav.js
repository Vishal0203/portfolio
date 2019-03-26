import { Fragment } from 'react'
import Link from 'next/link'
import { StyledNav, NavItem } from './styles/Header'
import { colors } from './styles/GlobalStyles'
import { AppContext } from './AppProvider'

export const NavItems = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <Fragment>
          <NavItem onClick={context.toggleMenu} accent={colors.accent.mandy}>
            <Link prefetch href='/about'>
              <a>about</a>
            </Link>
          </NavItem>
          <NavItem onClick={context.toggleMenu} accent={colors.accent.danube}>
            <Link prefetch href='/projects'>
              <a>projects</a>
            </Link>
          </NavItem>
          <NavItem onClick={context.toggleMenu} accent={colors.accent.silverTree}>
            <Link prefetch href='/contact'>
              <a>contact</a>
            </Link>
          </NavItem>
        </Fragment>
      )}
    </AppContext.Consumer>
  )
}

const Nav = () => {
  return (
    <StyledNav>
      <NavItems />
      <AppContext.Consumer>
        {(context) => {
          let className = `nav--collapsed ${context.state.showMenu ? 'ic-cross' : 'ic-menu'}`

          return (
            <span onClick={context.toggleMenu} className={className} />
          )
        }}
      </AppContext.Consumer>
    </StyledNav>
  )
}

export default Nav
