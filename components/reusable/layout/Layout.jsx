import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '@/components-i/header/Header';
import Footer from '@/components-i/footer/Footer';

const Layout = ({ children, headData, spacing }) => {
  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name='description' content={headData.description} />
      </Head>

      <Header spacing={spacing.header} />
      {children}
      <Footer spacing={spacing.footer} />
    </>
  );
};

// Proptypes
Layout.propTypes = {
  children: PropTypes.element.isRequired,
  headData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  spacing: PropTypes.shape({
    header: PropTypes.string,
    footer: PropTypes.string,
  }).isRequired,
};

export default Layout;
