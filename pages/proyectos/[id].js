import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from 'components/reusable/layout/Layout';
import Hero from '@/sections/proyects/Hero';
import Content from '@/sections/proyects/Content';
import Previews from '@/sections/proyects/Previews';
import OtherProyects from '@/sections/proyects/OtherProyects';
import ProyectImage from '@/sections/proyects/ProyectImage';
import { formatTitle } from '@/utils/utilities';

const Proyect = ({ proyectData }) => {
  const {
    title,
    intro,
    info,
    mainImage,
    // content,
    // icons,
    // previews,
    // otherProyectsContent,
    // otherProyectsImages,
  } = proyectData;

  // console.log(proyectData);

  return (
    <Layout
      headData={{
        title: `Proyecto ${formatTitle(title)}`,
        description: `${intro}`,
      }}
      route='/proyectos'
    >
      <main className='main-spacing-top flow-spacing-sections'>
        <Hero title={title} intro={intro} info={info} />
        <ProyectImage mainImage={mainImage} />
        <Content />
        <Previews />
        <OtherProyects />
      </main>
    </Layout>
  );
};

// Proptypes
Proyect.propTypes = {
  proyectData: PropTypes.shape({
    content: PropTypes.shape({}).isRequired,
    icons: PropTypes.shape({}).isRequired,
    info: PropTypes.shape({}).isRequired,
    intro: PropTypes.string.isRequired,
    mainImage: PropTypes.shape({}).isRequired,
    otherProyectsContent: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    otherProyectsImages: PropTypes.shape({}).isRequired,
    previews: PropTypes.shape({}).isRequired,
    publishedAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// Fetching Methods
export async function getStaticPaths() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}proyects?populate=mainImage,icons,previews,otherProyectsImages`
  );
  const dataArr = response.data.data;

  // Generate paths
  const paths = dataArr.map(obj => {
    return {
      params: { id: obj.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}proyects/${id}?populate=mainImage,icons,previews,otherProyectsImages`
  );
  const proyectData = response.data.data.attributes;

  return {
    props: { proyectData },
  };
}

export default Proyect;
