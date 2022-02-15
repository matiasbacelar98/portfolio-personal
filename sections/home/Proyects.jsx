import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { motion, useAnimation } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/index';
import { StyledH2 } from '@/typography';
import Proyect from '@/components-i/proyect/Proyect';

const Proyects = ({ proyectsData }) => {
  const controls = useAnimation();
  const initialAnimationValues = {
    opacity: 0,
    y: 60,
  };

  const animateProyectsSection = async () => {
    controls.start(i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.5,
        delay: i * 0.2,
      },
    }));
  };

  // Animate on scroll
  const { element } = useAnimateOnScroll(animateProyectsSection, 0.19, true);

  return (
    <section id='proyectos' className='flow-spacing-headings' ref={element}>
      <StyledH2 initial={initialAnimationValues} animate={controls} custom={0}>
        Proyectos
      </StyledH2>

      <motion.div initial={initialAnimationValues} animate={controls} custom={1}>
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
