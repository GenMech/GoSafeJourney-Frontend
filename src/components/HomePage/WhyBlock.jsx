import PropTypes from 'prop-types';
import { Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const WhyBlock = ({ heading, image, text, imageWidth }) => {
  return (
    <Flex direction='column' alignItems='center'>
      <Center
        w='65px'
        h='65px'
        borderRadius='50%'
        bgColor='brand.orange.200'
        mb='14px'
      >
        <Image src={image} alt='save money' width={imageWidth || '40'} />
      </Center>
      <Text as='h3' color='gray.800' fontSize='md' fontWeight='500' mb='5px'>
        {heading}
      </Text>
      <Text color='gray.600' fontSize='13px' w='70%' textAlign='center'>
        {text}
      </Text>
    </Flex>
  );
};

export default WhyBlock;

WhyBlock.defaultProps = {
  imageWidth: '40',
};

WhyBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
};
