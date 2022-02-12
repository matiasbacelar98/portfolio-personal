import Layout from '@/components-r/layout/Layout';
import About from '@/sections/home/About';

function Home() {
  return (
    <Layout headData={{ title: 'Inicio', description: 'Descripcion inicio' }} route='/'>
      <main className='wrapper flow-spacing-sections'>
        <About />
      </main>
    </Layout>
  );
}

export default Home;
