import { Box, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Review from '../components/HomePage/Review';
import MoneyImg from '../../public/images/icons/money.svg';
import LocationImg from '../../public/images/icons/location.svg';
import GlobeImg from '../../public/images/icons/globe.svg';
import WhyBlock from '../components/HomePage/WhyBlock';
import TopDes from '../components/HomePage/TopDes';
import SearchBar from '../components/SearchBar';
import destinations from '../components/HomePage/dummyData';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        h='600px'
        pt='50px'
        bgPosition='center'
        bgImage='linear-gradient(90deg, rgba(0,0,0,0.07), rgba(0,0,0,0.07)), url("/images/home-hero-bg.png")'
        bgSize='cover'
        px='14%'
      >
        <Flex
          direction='column'
          fontWeight='600'
          mt='120px'
          mb='80px'
          color='white'
          opacity='0.7'
        >
          <Text as='h2' fontSize='60px' lineHeight='60px'>
            Find your
          </Text>
          <Text as='h2' fontSize='80px' lineHeight='90px'>
            ideal stay
          </Text>
        </Flex>
        <SearchBar />
      </Box>
      <Box mx='8%' mt='7rem'>
        <Text
          as='h2'
          fontSize='36px'
          fontWeight='600'
          mb='3rem'
          textAlign='center'
        >
          Top Destinations To Explore
        </Text>
        <Flex justifyContent='space-between' wrap='wrap'>
          {destinations.map((place) => (
            <TopDes
              key={place.id}
              image={place.image}
              title={place.title}
              location={place.location}
              price={place.price}
            />
          ))}
        </Flex>
      </Box>
      <Flex mx='18%' my='10rem' direction='column' alignItems='center'>
        <Text as='h2' fontSize='60px' fontWeight='700'>
          Why to{' '}
          <Text as='span' color='orange.500'>
            book
          </Text>{' '}
          with us?
        </Text>
        <Text
          fontSize='sm'
          textAlign='center'
          color='gray.700'
          w='90%'
          mt='4'
          mb='2'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          perspiciatis placeat repellendus voluptatibus sunt consequuntur
          nesciunt amet? Aliquid aperiam earum, deserunt porro et voluptatum
          cupiditate sint, eveniet animi dolorum rerum!
        </Text>
        <Flex mt='16' w='70%' justifyContent='space-between'>
          <WhyBlock
            image={MoneyImg}
            heading='Save Money'
            text='Invest in trasave securily for future'
          />
          <WhyBlock
            image={LocationImg}
            imageWidth='30'
            heading='Vast Locations'
            text='Invest in trasave securily for future'
          />
          <WhyBlock
            image={GlobeImg}
            imageWidth='36'
            heading='Around the Globe'
            text='Invest in trasave securily for future'
          />
        </Flex>
      </Flex>
      <Box
        h='600px'
        bgPosition='bottom'
        bgImage='url("/images/home-review-bg.svg")'
        bgSize='cover'
      >
        <Flex mx='12%' py='80px' justifyContent='space-between'>
          <Flex direction='column' fontWeight='550' mt='60px'>
            <Text as='h2' fontSize='60px' lineHeight='75px'>
              What{' '}
              <Text as='span' color='orange.500'>
                people
              </Text>
            </Text>
            <Text as='h2' fontSize='44px'>
              have to say?
            </Text>
          </Flex>
          <Flex
            alignItems='flex-start'
            w='50%'
            mr='30px'
            justifyContent='space-between'
          >
            <Flex direction='column' gap='55px'>
              <Review
                tagline='Amazing Hotels!'
                description='Lorem ipsum dolor sit amet, conetur adipiscing elit. Facilisi nunc
                      faucibus praesent acl mala nunc egestas'
                author='Sumanshu Goel'
                rating={4.9}
              />
              <Box ml='25px'>
                <Review
                  tagline='Best Hospitality'
                  description='Lorem ipsum dolor sit amet, conetur adipiscing elit. Facilisi nunc
                        faucibus praesent acl mala nunc egestas'
                  author='Ankita Sharma'
                  rating={4.3}
                />
              </Box>
            </Flex>
            <Box mt='60px'>
              <Review
                tagline='Great Service!'
                description='Lorem ipsum dolor sit amet, conetur adipiscing elit. Facilisi nunc
                      faucibus praesent acl mala nunc egestas'
                author='Subhjait Kaur'
                rating={4.7}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
