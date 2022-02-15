import Layout from '@/components-r/layout/Layout';
import Content from '@/sections/error/Content';

const Error = () => {
  return (
    <Layout headData={{ title: 'Error', description: 'Ha ocurrido un error' }} route='/404'>
      <main className='wrapper main-spacing-top'>
        <Content />
      </main>
    </Layout>
  );
};

export default Error;
