import { css } from 'styled-components'

const sizes = {
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  largeDesktop: 1800,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc
}, {});
