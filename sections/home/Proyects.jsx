import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { motion, useAnimation } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/index';
import { StyledH2 } from '@/typography';
import Proyect from '@/components-i/proyect/Proyect';

const Proyects = ({ proyectsData }) => {
  const controls = { title: useAnimation(), proyects: useAnimation() };

  const animateProyectsSection = async () => {
    const { title, proyects } = controls;

    await title.start({
      y: 0,
      transition: {
        type: 'tween',
        ease: 'circOut',
        duration: 0.4,
        delay: 0.2,
      },
    });

    proyects.start(i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'circOut',
        duration: 0.5,
        delay: i * 0.15,
      },
    }));
  };

  // Animate on scroll
  const { element } = useAnimateOnScroll(animateProyectsSection, 0.19, true);

  return (
    <section id='proyectos' className='flow-spacing-headings' ref={element}>
      <motion.div initial={{ overflow: 'hidden' }}>
        <StyledH2 initial={{ y: 60 }} animate={controls.title}>
          Proyectos
        </StyledH2>
      </motion.div>

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
              controls={controls.proyects}
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
