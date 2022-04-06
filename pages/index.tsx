import type { NextPage } from 'next';
import dynamic from 'next/dynamic'
import { Heading, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from '../data/data';
import ProjectCardGrid from '../components/ProjectCardGrid';
import ProjectCardGridMobile from '../components/ProjectCardMobile';


const DynamicProjectCardMobile = dynamic(() => import('../components/ProjectCardMobile'), {ssr : false});
const DynamicProjectCard = dynamic(() => import('../components/ProjectCardGrid'), {ssr : false});

const Home: NextPage = () => {

  const [isNotMobile] = useMediaQuery('(min-width: 700px)');

  return (
    <Box bg={"gray.200"}>
      <Flex
        backgroundColor={'black'}
        height={'7.5vh'}
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
          src={'/devlogo.png'}
          alt='Logo JLHDEV'
        />
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
      {/* <Box
        backgroundColor={'black'}
        minHeight={'7.5vh'}
        position={"fixed"}
        top={"0px"}
        width={"100%"}
        padding={'0.5rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
        display={'inline-block'}
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


      </Box> */}
        
        {/* {projects.map(project => (<ProjectCardGrid {...project} /> ))} */}
        {/* {projects.map(project => (isNotMobile ? <DynamicProjectCard {...project} /> : <DynamicProjectCardMobile {...project} />))}


      </Box> */}
      {isNotMobile ? <DynamicProjectCardMobile /> : <DynamicProjectCardMobile />}

      <Flex
        backgroundColor={'white '}
        minHeight={'5rem'}
        position={"fixed"}
        bottom={"0px"}
        width={"100%"}
        padding={'0.5rem'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text fontSize={'0.8rem'}>
          Dr Jonathon Hughes <br></br>
          linkedin.com/in/jlhdev/ <br></br>
          github.com/hughesjl1 <br></br>
        </Text>
      </Flex>
    </Box>
  )
}

export default Home
