import { useEffect, useRef } from 'react';
import {
  chakra,
  Flex,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { HiOutlineArrowUp } from 'react-icons/hi';

const Footer = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current = document.querySelector('#go-app');
  }, []);

  return (
    <Flex mx='18%' my='16' color='brand.900' justifyContent='space-between'>
      <Flex direction='column' w='28%'>
        <Text fontSize='xl' mb='10' fontWeight='410'>
          5003 Golf Course Rd. #22B Gurgaon, Haryana 44635
        </Text>
        <Flex alignItems='center' gap='10px' mb='5' fontSize='md'>
          <Icon as={IoCallOutline} />
          <chakra.a
            href='tel:+91 8776676556'
            _hover={{ textDecoration: 'underline' }}
          >
            +91 8776676556
          </chakra.a>
        </Flex>
        <Flex alignItems='center' gap='10px' fontSize='md'>
          <Icon as={IoMailOutline} />
          <chakra.a
            href='mailto:contact@gosafejourney.com'
            _hover={{ textDecoration: 'underline' }}
          >
            contact@gosafejourney.com
          </chakra.a>
        </Flex>
      </Flex>
      <Flex
        direction='column'
        w='30%'
        gap='30px'
        color='brand.900'
        opacity='0.75'
      >
        <Flex fontSize='sm' justifyContent='space-between'>
          <Flex direction='column' gap='4' mr='8'>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Terms & Conditions
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Privacy Policy
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Support
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Contact
            </chakra.a>
          </Flex>
          <Flex direction='column' gap='4'>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Facebook
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Twitter
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Linkedin
            </chakra.a>
            <chakra.a href='' _hover={{ textDecoration: 'underline' }}>
              Instagram
            </chakra.a>
          </Flex>
        </Flex>
        <Text fontSize='xs'>
          &copy; {new Date().getFullYear()} Gosafejourney. All rights reserved.
        </Text>
      </Flex>
      <Tooltip label='Scroll to top'>
        <IconButton
          w='44px'
          h='44px'
          variant='dark'
          borderRadius='50%'
          aria-label='Scroll to Top'
          icon={<HiOutlineArrowUp color='white' size='18px' />}
          onClick={() =>
            mainRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </Tooltip>
    </Flex>
  );
};

export default Footer;
