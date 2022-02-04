import Header from '@/components-i/header/Header';
import Footer from '@/components-i/footer/Footer';

function Home() {
  return (
    <>
      <Header spacing='header-spacing-top' />
      <main>
        <p id='hero' style={{ height: '100vh', backgroundColor: 'red' }}>
          seccion home
        </p>

        <p id='sobremi' style={{ height: '100vh', backgroundColor: 'blue' }}>
          seccion sobre mi
        </p>

        <p id='proyectos' style={{ height: '100vh', backgroundColor: 'orange' }}>
          seccion proyectos
        </p>

        <p id='contacto' style={{ height: '100vh', backgroundColor: 'green' }}>
          seccion contacto
        </p>
      </main>

      <Footer spacing='footer-spacing-top' />
    </>
  );
}

export default Home;
