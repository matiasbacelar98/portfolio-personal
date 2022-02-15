import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from '@/components-r/layout/Layout';
import About from '@/sections/home/About';
import Proyects from '@/sections/home/Proyects';
import Hero from '@/sections/home/Hero';

function Home({ proyectsData }) {
  return (
    <Layout headData={{ title: 'Inicio', description: 'Descripcion inicio' }} route='/'>
      <main className='wrapper flow-spacing-sections'>
        <Hero />
        <Proyects proyectsData={proyectsData} />
        <About />
      </main>
    </Layout>
  );
}

// Proptypes
Home.propTypes = {
  proyectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
};

// Fetching Methods
export async function getStaticProps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}hover-images?populate=img
  `);

  return {
    props: { proyectsData: response.data.data },
  };
}

export default Home;
