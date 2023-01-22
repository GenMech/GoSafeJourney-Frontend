import { Flex, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const headings = ['About Us', 'Contact Us', 'List your Property'];

const Header = () => {
  return (
    <Flex
      w='100%'
      overflow='hidden'
      px='8%'
      py='6'
      alignItems='center'
      position='absolute'
      justifyContent='space-between'
      zIndex='100'
    >
      <Heading size='lg' color='white'>
        Booking
      </Heading>
      <Flex justify='space-between' alignItems='center' gap='44px'>
        {headings.map((head) => (
          <Link key={head} href='/'>
            <Text
              as='span'
              color='white'
              fontWeight='500'
              _hover={{ textDecoration: 'underline' }}
            >
              {head}
            </Text>
          </Link>
        ))}
        <Button colorScheme='blackAlpha'>Login</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
