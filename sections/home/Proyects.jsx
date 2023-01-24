import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/index';
import { StyledH2 } from '@/typography';
import Proyect from '@/components-i/proyect/Proyect';

const Proyects = ({ proyectsData }) => {
  // Execute anim when element is in view
  const [element, controls, initialAnimValues] = useAnimateOnScroll(0.19, 0.5);

  return (
    <section id='proyectos' className='flow-spacing-headings' ref={element}>
      <StyledH2 initial={initialAnimValues} animate={controls} custom={0}>
        Proyectos
      </StyledH2>

      <motion.div initial={initialAnimValues} animate={controls} custom={1}>
        {proyectsData.map(proyect => {
          const { title } = proyect.attributes;
          const { url } = proyect.attributes.img.data.attributes;

          return <Proyect key={proyect.id} number={proyect.id} title={title} imgData={{ url }} />;
        })}
      </motion.div>
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
