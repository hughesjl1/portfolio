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
