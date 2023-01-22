import { extendTheme } from '@chakra-ui/react';

const fontSizes = {
  '2xs': '10px',
};

const colors = {
  brand: {
    orange: {
      200: '#FFC495',
    },
    900: '#0A142F',
  },
};

const theme = extendTheme({
  colors,
  fontSizes,
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },
  components: {
    Button: {
      variants: {
        dark: {
          bgColor: 'brand.900',
          color: 'white',
          _hover: {
            bgColor: '#343434',
          },
        },
      },
    },
    IconButton: {
      variants: {
        dark: {
          bgColor: 'brand.900',
          color: 'white',
          _hover: {
            bgColor: '#343434',
          },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
});

export default theme;
