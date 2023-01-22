import PropTypes from 'prop-types';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const Review = ({ tagline, description, author, rating }) => {
  return (
    <Flex
      direction='column'
      w='256px'
      p='20px'
      bgColor='white'
      boxShadow='sm'
      borderRadius='2px'
    >
      <Text fontWeight='700' fontSize='md' mb='8px'>
        {tagline}
      </Text>
      <Text mb='5' fontSize='2xs' color='#7C7C7C'>
        &quot;{description}&quot;.
      </Text>
      <Text fontWeight='700' fontSize='sm'>
        {author}
      </Text>
      <Flex alignItems='center' gap='7px'>
        <Flex gap='2px'>
          {new Array(Math.round(rating)).fill(null).map((star, index) => (
            <Icon key={index} as={FaStar} color='#FFBC1D' w='12px' />
          ))}
        </Flex>
        <Text fontSize='xs' fontWeight='300' mt='2px'>
          <Text as='span' fontWeight='500'>
            {rating}
          </Text>{' '}
          Rating
        </Text>
      </Flex>
    </Flex>
  );
};

export default Review;

Review.propTypes = {
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
