import styled from 'styled-components'
import { transparentize } from 'polished'
import { colors } from './GlobalStyles'
import { media } from './Mixins';

const PADDING_LG = '2em';

export const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  bottom: 0;
  padding: .2em 1em;
  background-color: ${colors.bg.woodsmoke};
  
  ${media.tabletLandscape`
    bottom: 1.6em;
    padding: 0 ${PADDING_LG};
    background-color: transparent;  
  `}
  
  .social {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    
    li {
      padding: .5em;
      margin-right: .5em;
      transition: transform .4s;

      ${media.tabletLandscape`
        margin-right: 1em;
      `}

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
    
    a {
      text-decoration: none;
      cursor: pointer;
    }

    [class^='ic-'] {
      font-size: 1.2em;

      &:before {
        color: ${transparentize(.3, colors.app.primary)};
      }
      
      ${media.tabletPortrait`
        font-size: 1.4em;      
      `}
    }
  }
  
  .download-resume {
    display: inline-block;
    right: ${PADDING_LG};
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: transform .2s;

    &:hover {
      transform: scale(1.05);
    }

    a {
      display: inline-block;
      text-decoration: none;
      padding-bottom: 2px;
      font-size: .8em;
      color: ${transparentize(.3, colors.app.primary)};
      border-bottom: 1px solid ${transparentize(.3, colors.app.primary)};
    }
  }
`;
