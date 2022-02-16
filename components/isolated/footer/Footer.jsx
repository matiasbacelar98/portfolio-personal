import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { StyledTwoColumnGrid } from '@/styles/reusable/twoColumnGrid';
import { useAnimateOnScroll } from '@/hooks/index';
import { StyledH2 } from '@/typography';
import github from 'react-useanimations/lib/github';
import instagram from 'react-useanimations/lib/instagram';
import linkedin from 'react-useanimations/lib/linkedin';
import facebook from 'react-useanimations/lib/facebook';
import Icon from '@/components-i/icon/Icon';
import Logo from '@/components-r/logo/Logo';
import { StyledButton, StyledLogoArticle, StyledContentWrapper, StyledIconsGrid } from './styles';

const Footer = ({ spacing }) => {
  const { pathname, push, query } = useRouter();
  const homePathname = '/';
  // Execute anim when element is in view
  const [element, controls, initialAnimValues] = useAnimateOnScroll(0.19, 0.3);

  const toTop = () => {
    // Clear url
    if (pathname === homePathname) {
      push('/', undefined, { shallow: true });
    } else {
      push(`/proyectos/${query.id}`, undefined, { shallow: true });
    }

    window.scrollTo(0, 0);
  };

  return (
    <footer id='contacto' className={`wrapper footer-spacing-bottom ${spacing}`} ref={element}>
      <StyledTwoColumnGrid
        initial={pathname === '/404' ? false : initialAnimValues}
        animate={controls}
        custom={0}
        className='flow-spacing-text rm-spacing-lg'
      >
        <StyledContentWrapper>
          <StyledH2>Contactame</StyledH2>

          <p className='max-width-550'>
            Si queres contactarme podes hacerlo a{' '}
            <a href='mailto:matiasbacelar@gmail.com' className='fw-bold underline'>
              matiasbacelar@gmail.com
            </a>
          </p>
        </StyledContentWrapper>

        <StyledIconsGrid>
          <Icon
            iconObj={linkedin}
            url='https://www.linkedin.com/in/matias-bacelar-371140199/'
            color='#2D70D4'
          />
          <Icon iconObj={github} url='https://github.com/matiasbacelar98' color='#BD2C00' />
          <Icon iconObj={instagram} url='https://www.instagram.com/matibace/' color='#E1306C' />
          <Icon
            iconObj={facebook}
            url='https://www.facebook.com/matias.bacelar.5'
            color='#4267B2'
          />
        </StyledIconsGrid>
      </StyledTwoColumnGrid>

      <StyledLogoArticle
        initial={pathname === '/404' ? false : initialAnimValues}
        animate={controls}
        custom={1}
      >
        <Logo />
        <StyledButton onClick={toTop}>Volver arriba</StyledButton>
      </StyledLogoArticle>
    </footer>
  );
};

// Proptypes
Footer.propTypes = {
  spacing: PropTypes.string.isRequired,
};

export default Footer;
