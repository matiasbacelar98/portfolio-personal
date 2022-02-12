import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { StyledH2 } from '@/typography';
import Proyect from '@/components-i/proyect/Proyect';

const Proyects = ({ proyectsData }) => {
  return (
    <section id='proyectos' className='flow-spacing-headings'>
      <StyledH2>Proyectos</StyledH2>

      <div>
        {proyectsData.map((proyect, index) => {
          const { title } = proyect.attributes;
          const { url, alternativeText } = proyect.attributes.img.data.attributes;

          return (
            <Proyect
              key={uuidv4()}
              number={index}
              title={title}
              imgData={{ url, alternativeText }}
            />
          );
        })}
      </div>
    </section>
  );
};

// Proptypes
Proyects.propTypes = {
  proyectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
};

export default Proyects;
