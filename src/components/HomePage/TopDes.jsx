import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

const TopDes = ({ image, title, price, location }) => {
  return (
    <Box mb='9' maxW='22.5%' w='22.5%'>
      <Box
        w='100%'
        height='240px'
        bgImage={`url("${image}")`}
        bgSize='cover'
        bgPosition='center'
        borderRadius='12px'
      />
      <Text
        mt='3'
        fontWeight='600'
        as='h4'
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </Text>
      <Text fontWeight={500} fontSize='sm' color='gray.600' mb='2px'>
        {location}
      </Text>
      <Text fontWeight={500} fontSize='sm' color='gray.900'>
        &#8377; {`${price} per room`}
      </Text>
    </Box>
  );
};

export default TopDes;

TopDes.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
