import { keyframes } from 'styled-components'

export const fadeInLeft = keyframes`
  from {
    left: -60px;
  }
  to {
    opacity: 1;
    left: 0;
  }
`;

export const fadeInRight = keyframes`
  from {
    right: -60px;
  }
  to {
    opacity: 1;
    right: 0;
  }
`;
