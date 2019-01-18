import styled from 'styled-components';
import { HEADER_HEIGHT } from './Constants';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: calc(${HEADER_HEIGHT} + 2em) 4em 0;
  height: 100vh;
`;
