import styled from 'styled-components';
import { HEADER_HEIGHT_LG, HEADER_HEIGHT_SM } from './Constants';
import { media } from './Mixins'

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: calc(${HEADER_HEIGHT_SM} + 2em) 3em;
  
  ${media.tabletPortrait`
    padding: calc(${HEADER_HEIGHT_LG} + 3em) 4em;
  `}
`;
