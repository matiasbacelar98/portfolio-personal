import { useRouter } from 'next/router';
import Layout from 'components/reusable/layout/Layout';
import Link from 'next/link';

const Proyect = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout headData={{ title: 'Dynamic route', description: 'Ruta dinamica' }} route='/proyectos'>
      <>
        <h1>Params : {id}</h1>

        <Link href='/'>volver a Inicio</Link>

        <div style={{ margin: '50rem' }} />

        <div id='otros-proyectos' style={{ backgroundColor: 'red', padding: '10rem 0' }}>
          otros proyectos
        </div>
      </>
    </Layout>
  );
};

export default Proyect;
