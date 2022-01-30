import { css } from 'styled-components';

import MontserratBold from '@/public/fonts/Montserrat-Bold.ttf';
import MontserratSemibold from '@/public/fonts/Montserrat-SemiBold.ttf';
import RalewayBold from '@/public/fonts/Raleway-Bold.ttf';
import RalewayMedium from '@/public/fonts/Raleway-Medium.ttf';

export const mulishAndFiracodeFonts = css`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), url(${MontserratBold});
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), url(${MontserratSemibold});
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Raleway Bold'), url(${RalewayBold});
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Raleway Medium'), url(${RalewayMedium});
  }
`;
