import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Box overflow='hidden' w='100%'>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
