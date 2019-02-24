import { Fragment } from 'react'
import Link from 'next/link';
import { StyledNav, NavItem } from './styles/Header'
import { colors } from './styles/GlobalStyles';

const NavItems = () => {
  return (
    <Fragment>
      <NavItem accent={colors.accent.mandy}>
        <Link prefetch href='/about'>
          <a>about</a>
        </Link>
      </NavItem>
      <NavItem accent={colors.accent.danube}>
        <Link prefetch href='/projects'>
          <a>projects</a>
        </Link>
      </NavItem>
      <NavItem accent={colors.accent.silverTree}>
        <Link prefetch href='/contact'>
          <a>contact</a>
        </Link>
      </NavItem>
    </Fragment>
  )
}

const Nav = () => {
  return (
    <StyledNav>
      <NavItems />
      <span className='nav--collapsed ic-menu' />
    </StyledNav>
  )
};

export default Nav;
