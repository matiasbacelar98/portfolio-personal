import { useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StyledHighlight, EntranceHeading } from '@/typography';
import { removeScroll } from '@/utils/utilities';
import { useAnimationContext } from '@/context/animationContext';
import { StyledWrapper, StyledBg, StyledSvg } from './styles';

const Entrance = () => {
  const [contentWrapper, setContentWrapper] = useState(false);
  const { isEntranceActive, setIsEntranceActive } = useAnimationContext();
  const logoPathControls = useAnimation();
  const tabletBreakpoint = 768;

  const textAnimation = delay => ({
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut',
      delay,
    },
  });

  // Remove scroll if entrance is active
  useLayoutEffect(() => {
    if (!isEntranceActive) return;

    if (typeof window !== 'undefined') {
      const htmlNode = document.querySelector('html');
      removeScroll(htmlNode);
    }
  }, [isEntranceActive]);

  // Animate Logo
  useEffect(() => {
    const animateLogo = async () => {
      // Animate path
      await logoPathControls.start({
        pathLength: 1,
        transition: {
          duration: 3,
          type: 'tween',
        },
      });

      // Animate bg & stroke-width
      await Promise.all([
        logoPathControls.start({
          fill: ['rgba(255, 255, 255, 0)', '#ffff'],
          transition: {
            type: 'tween',
            duration: 0.3,
            ease: 'easeIn',
          },
        }),
        logoPathControls.start({
          strokeWidth: 0,
          transition: {
            type: 'tween',
            duration: 0.8,
            ease: 'easeIn',
          },
        }),
      ]);

      // Render content wrapper
      setContentWrapper(true);
    };

    animateLogo();
  }, [logoPathControls]);

  return (
    <StyledBg
      className='center'
      key='entrance'
      exit={{
        y: '-100vh',
        transition: {
          type: 'spring',
          ease: 'easeOut',
          duration: 1,
          bounce: 0,
          delay: 0.5,
        },
      }}
    >
      <div className='wrapper center'>
        <StyledWrapper layout>
          <motion.div layout>
            <StyledSvg
              width='125'
              height='125'
              viewBox='0 0 56 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={logoPathControls}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M29.002 28.5652C28.33 28.5817 28.1651 28.8652 28.1025 28.9726C27.8989 29.3237 27.9273 29.8462 28.1701 30.2152C28.3787 30.532 28.6956 30.6713 29.1775 30.6531C29.5577 30.6375 30.5774 30.3317 31.7751 29.7295C30.5207 28.9613 29.3681 28.5993 29.002 28.5652ZM27.9948 55.858C12.82 55.858 0 43.7433 0 29.4032C0 21.1815 3.54609 16.2262 6.52081 13.5171C10.2089 10.1587 15.3013 8.22324 20.5074 8.19791C21.1614 8.13672 24.2299 7.91288 27.8392 8.68519C33.2654 9.84626 37.3403 12.7005 39.6228 16.9391C42.1785 21.6845 41.0473 25.3579 39.6483 27.6038C39.0732 28.5269 38.3578 29.3609 37.5679 30.1006C39.5012 32.7413 40.0222 35.9083 39.0723 39.3037C38.1994 42.4245 35.4664 46.2959 27.4042 47.0168C22.9553 47.4145 18.8944 46.6488 18.7238 46.6162L17.2072 46.3248V18.0992C17.2072 17.1133 18.0558 16.3137 19.1025 16.3137C20.1493 16.3137 20.9979 17.1133 20.9979 18.0992V43.3347C24.6555 43.7623 33.7787 44.2135 35.4068 38.3936C36.0488 36.0979 35.7704 34.0545 34.5789 32.3143C32.5198 33.5226 30.4807 34.178 29.3288 34.2214C27.4836 34.2903 25.883 33.5167 24.9488 32.0973C23.9864 30.6357 23.9189 28.7368 24.7768 27.2593C25.5977 25.8452 27.1271 25.0197 28.9725 24.994L29.0126 24.9939C30.3313 24.9939 32.7896 25.867 34.9729 27.5082C35.5047 26.9969 35.9904 26.4227 36.3862 25.7843C37.7368 23.6073 37.6897 21.2425 36.2423 18.5547C34.4767 15.2765 31.4036 13.1355 27.108 12.191C23.743 11.4511 20.8618 11.7535 20.833 11.7566L20.7241 11.7684L20.6104 11.7689C16.3425 11.7689 12.1675 13.3418 9.15557 16.0847C5.64583 19.2807 3.79077 23.8864 3.79077 29.4034C3.79077 35.2274 6.3728 41.0509 10.8749 45.3809C15.5053 49.8345 21.5855 52.287 27.9948 52.287C34.4691 52.287 40.5354 49.9074 45.0762 45.5864C49.6105 41.2718 52.1076 35.521 52.1076 29.3933C52.1076 23.171 49.4161 16.7059 44.7231 11.6556C39.9488 6.51775 33.6519 3.57101 27.4472 3.57101C26.4003 3.57101 25.5518 2.77159 25.5518 1.78551C25.5518 0.799258 26.4003 0 27.4472 0C31.2449 0 34.984 0.872301 38.5611 2.59272C41.8952 4.19643 44.928 6.45428 47.5755 9.3033C52.8647 14.9953 55.8983 22.3177 55.8983 29.3932C55.8983 36.468 53.0117 43.1111 47.7702 48.0986C42.5117 53.1023 35.4888 55.8578 27.9948 55.8578'
                fill='none'
                stroke='#FFF'
                strokeWidth='1'
              />
            </StyledSvg>
          </motion.div>

          {contentWrapper ? (
            <div>
              <motion.div initial={{ overflow: 'hidden' }}>
                <StyledHighlight
                  initial={{
                    y: window.innerWidth < tabletBreakpoint ? 60 : 40,
                  }}
                  animate={() => textAnimation(0.4)}
                >
                  Frontend Developer
                </StyledHighlight>
              </motion.div>

              <motion.div initial={{ overflow: 'hidden' }}>
                <EntranceHeading
                  initial={{
                    y: window.innerWidth < tabletBreakpoint ? 80 : 60,
                  }}
                  animate={() => textAnimation(0.6)}
                  onAnimationComplete={() => setIsEntranceActive(false)}
                >
                  Matias Bacelar
                </EntranceHeading>
              </motion.div>
            </div>
          ) : null}
        </StyledWrapper>
      </div>
    </StyledBg>
  );
};

export default Entrance;
