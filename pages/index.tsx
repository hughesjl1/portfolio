import type { NextPage } from 'next';
import dynamic from 'next/dynamic'
import { Heading, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from './data/data';
import ProjectCardGrid from './components/ProjectCardGrid';
import ProjectCardGridMobile from './components/ProjectCardMobile';


const DynamicProjectCardMobile = dynamic(() => import('./components/ProjectCardMobile'), {ssr : false});
const DynamicProjectCard = dynamic(() => import('./components/ProjectCardGrid'), {ssr : false});


const ProjectCard = ({ title, description, image, valueAdd, responsibilites }: IProjectSpec) => {

  const roles = [{
    title: "Responsibilities",
    role: responsibilites,
    icon: Gi3DHammer
  }, {
    title: "Value Add",
    role: valueAdd,
    icon: GrDiamond
  }
  ]

  return (
    <Box height={"30vw"} backgroundColor={"white"} margin={"2rem"} pt={1} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} alignContent={'space-evenly'} gap={5} px={1}>
      {/* <VStack gap={1} alignItems={'start'} mx={3}> */}
      <HStack height='50%'>
        <Image
          // height={"20%"}
          width={'60%'}
          objectFit='contain'
          src={image}
          alt='Logo JLHDEV'
        />
        <VStack align={'flex-start'} height={'full'}>
          <Heading as={'h3'} size={'l'} >
            {title}
          </Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
      <Flex align={'baseline'}>
        <Badge variant={'subtle'} colorScheme={'blue'}>REACT</Badge>
      </Flex>

      <VStack>
        {roles.map(({ role, icon, title }) => (
          <HStack width={'100%'}>
            <Flex width={'3rem'} height={'3rem'} bg={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={'5px'}>
              <Icon as={icon} width={'1.5rem'} height={'1.5rem'} bg={'gray.200'} />
            </Flex>
            <VStack justifyContent={'start'} alignContent={'start'} align={'flex-start'}>
              <Heading as={'h6'} size={'xs'}>{title}</Heading>
              <Text fontSize={['5px', '10px', '15px', '10px', '15px']}>{role}</Text>

            </VStack>
          </HStack>
        ))}
      </VStack>

      <HStack justifyContent={'space-around'} width={'100%'} justifySelf={'end'} alignSelf={'flex-end'}>
        <Icon as={AiFillTwitterSquare} />
        <Icon as={AiFillTwitterSquare} />
        <Icon as={AiFillTwitterSquare} />
      </HStack>

      {/* </VStack> */}
      {/* <Text position={'absolute'} bottom={'-5rem'} right={'0px'} width={'5rem'} bg={'gray'}>
        Example
      </Text> */}
    </Box>
  )
}

const Home: NextPage = () => {

  const [isNotMobile] = useMediaQuery('(min-width: 700px)');

  return (
    <Box bg={"gray.200"} mt={'-3rem'}>
      <Flex
        backgroundColor={'black'}
        minHeight={'5rem'}
        position={"fixed"}
        top={"0px"}
        width={"100%"}
        padding={'0.5rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Image
          height={"3rem"}
          objectFit='cover'
          src={'/jlhdev.jpg'}
          alt='Logo JLHDEV'
        />
        <Flex>
          <Text color={'white'}>Projects</Text>
        </Flex>


      </Flex>
      <Box flex={1} mx={{'sm' : '5%', 'md': '10%', 'lg' : '25%'}} pt={"10rem"} pb={'25rem'} justifyContent={"center"} width={{'sm' : '90%', 'md': '80%', 'lg' : '50%'}} backgroundColor={"gray.200"} height={"100%"}>
        {/* <Tabs isFitted position={'fixed'} mb={'2rem'}>
          <TabList>
            <Tab>Web3</Tab>
            <Tab>Serverless</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box height={"30vw"} width={'100%'} backgroundColor={"white"} margin={"2rem"} pt={"2rem"} border={'black solid 0.2mm'}>
                <VStack gap={1} alignItems={'start'}>
                  <Image
                    height={"40%"}
                    objectFit='cover'
                    src={'/jlhdev.jpg'}
                    alt='Logo JLHDEV'
                  />
                  <Heading as={'h3'} size={'xl'}>
                    Market Place for AI enhanced corgi Nft
                  </Heading>
                  <Text>Description of market place</Text>
                  <HStack justifyItems={'space-'} width={'100%'}>
                    <Icon as={AiFillTwitterSquare} width={'3rem'} bg={'black'} />
                    <Icon as={AiFillTwitterSquare} />
                    <Icon as={AiFillTwitterSquare} />
                  </HStack>

                </VStack>
              </Box>
              <Box height={"30vw"} backgroundColor={"black"} margin={"2rem"}>a</Box>
            </TabPanel>
            <TabPanel>
              <Box height={"30vw"} backgroundColor={"black"} margin={"2rem"}>a</Box>
              <Box height={"30vw"} backgroundColor={"black"} margin={"2rem"}>a</Box>
            </TabPanel>
          </TabPanels>
        </Tabs> */}

        {/* {projects.map(project => (<ProjectCardGrid {...project} /> ))} */}
        {projects.map(project => (isNotMobile ? <DynamicProjectCard {...project} /> : <DynamicProjectCardMobile {...project} />))}


        <Box height={"30vw"} backgroundColor={"black"} margin={"2rem"}>a</Box>

      </Box>
      <Flex
        backgroundColor={'white '}
        minHeight={'5rem'}
        position={"fixed"}
        bottom={"0px"}
        width={"100%"}
        padding={'0.5rem'}
        alignItems={'center'}
      ></Flex>
    </Box>
  )
}

export default Home
