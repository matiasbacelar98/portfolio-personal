import Layout from 'components/reusable/layout/Layout';
import Link from 'next/link';

const Test = () => {
  return (
    <Layout headData={{ title: 'Test', description: 'Descripcion test' }}>
      <Link href='/'>volver a Inicio</Link>
    </Layout>
  );
};

export default Test;
