import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const colors = {
  app: {
    primary: '#DCDCDC',
    secondary: '#000'
  },
  bg: {
    shark: '#17181E',
    fadedComet: 'rgba(90, 94, 119, .2)',
    ripeLemon: '#EED71D',
    woodsmoke: '#111217',
  },
  accent: {
    mandy: '#E04C51',
    danube: '#5688C7',
    silverTree: '#68B684'
  }
};

const GlobalStyles = createGlobalStyle`
${styledNormalize}

html {
  box-sizing: border-box;
  font-size: 10px;
  width: 100%;
  height: 100%;
  background: ${colors.bg.shark} radial-gradient(circle farthest-side at 25% 5%, ${colors.bg.fadedComet}, ${colors.bg.shark}) fixed;
  font-family: 'Montserrat', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
}  
`;

export default GlobalStyles
