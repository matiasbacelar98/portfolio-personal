import { css } from 'styled-components';

export const montserratAndRalewayFonts = css`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), url('/fonts/Montserrat-Bold.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), url('/fonts/Montserrat-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Raleway Bold'), url('/fonts/Raleway-Bold.ttf');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Raleway Medium'), url('/fonts/Raleway-Medium.ttf');
  }
`;
