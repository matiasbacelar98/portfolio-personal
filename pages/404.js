import Layout from '@/components-r/layout/Layout';

const Error = () => {
  return (
    <Layout headData={{ title: 'Error', description: 'Ha ocurrido un error' }} route='/404'>
      <div>Error</div>
    </Layout>
  );
};

export default Error;
