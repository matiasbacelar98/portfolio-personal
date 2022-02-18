import styled from 'styled-components';
import ArrowLink from '@/components-r/arrowLink/ArrowLink';

const Content = () => {
  return (
    <section className='center'>
      <div className='flow-spacing-text center'>
        <h1>
          {/* eslint-disable-next-line */}
          <img src='/404.svg' alt='error' />
        </h1>

        <StyledParragraph>La página que estas buscando no existe</StyledParragraph>

        <ArrowLink to='/' text='Volver a inicio' />
      </div>
    </section>
  );
};

// Styled
const StyledParragraph = styled.p`
  text-align: center;
`;
export default Content;
