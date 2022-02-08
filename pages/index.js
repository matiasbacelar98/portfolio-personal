import Layout from '@/components-r/layout/Layout';
import Link from 'next/link';

function Home() {
  return (
    <Layout headData={{ title: 'Inicio', description: 'Descripcion inicio' }}>
      <main>
        <Link href='/test'>ir a test route</Link>

        <p id='hero' style={{ height: '100vh', backgroundColor: 'red' }}>
          seccion home
        </p>

        <p id='sobremi' style={{ height: '100vh', backgroundColor: 'blue' }}>
          seccion sobre mi
        </p>

        <p id='proyectos' style={{ height: '100vh', backgroundColor: 'orange' }}>
          seccion proyectos
        </p>
      </main>
    </Layout>
  );
}

export default Home;
