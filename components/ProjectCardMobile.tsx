import type { NextPage } from 'next';
import { Heading, Link, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from '../data/data';

const CardMobile = ({ title, description, image, valueAdd, responsibilites, skills, type, github }: IProjectSpec) => {

  const roles = [{
    title: "Responsibilities",
    role: responsibilites,
    icon: Gi3DHammer,
    colStart: 1
  }, {
    title: "Value Add",
    role: valueAdd,
    icon: GrDiamond,
    colStart: 3
  }];

  const textFontSize = { 'base': '0.6rem', 'sm': '0.7rem', 'md': '0.8rem', 'lg': '1rem' };

  return (
    <Box height={"65vh"} width={{ 'sm': '96vw', 'md': '50vw' }} backgroundColor={"white"} mb={4} pt={1} mx={'0vw'} boxShadow={'md'}>
      <Grid templateColumns={"repeat(4, 1fr)"} templateRows={"repeat(10,1fr)"} gap={1} height={'100%'}>
        <GridItem colStart={1} colEnd={5} rowStart={1} rowEnd={2} >

          <HStack>
            <Image
              height={"3rem"}
              width={'3rem'}
              objectFit='fill'
              src={'./devlogo.png'}
              alt='Logo JLHDEV'
              margin={'1rem'}
              borderRadius={'sm'}
            />
            <VStack align={'flex-start'}>
              <Heading as={'h6'} size={'sm'}>{title}</Heading>
              <Text fontSize={textFontSize}>{description}</Text>
            </VStack>

          </HStack>
        </GridItem>

        <GridItem colStart={1} colEnd={5} rowStart={2} rowEnd={7}>
          <Image
            height={"100%"}
            width={'100%'}
            objectFit='fill'
            src={image}
            alt='Logo JLHDEV'
          />
        </GridItem>
        {/* <GridItem colSpan={10} rowStart={6} rowEnd={7}>
          <Flex align={'baseline'}>
            {skills.map(skill => <Badge key={skill} variant={'subtle'} colorScheme={'blue'} mr={'0.5rem'}>{skill}</Badge>)}
            <Badge variant={'subtle'} colorScheme={'blue'}>REACT</Badge>
          </Flex>
        </GridItem> */}

        {roles.map(({ role, title, icon, colStart }) => (
          <GridItem colStart={colStart} colSpan={2} rowStart={7} rowEnd={10} mx={1} mt={3} key={`${role}-${title}`}>
            <VStack align={'start'}>
              <HStack>
                <Flex width={'2rem'} height={'2rem'} bg={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={'5px'}>
                  <Icon as={icon} width={'1.5rem'} height={'1.5rem'} bg={'gray.200'} />
                </Flex>
                <Text >{title}</Text>
                {/* <Text>{valueAdd}</Text> */}
              </HStack>
              <Text fontSize={textFontSize}>
                {role}
              </Text>
            </VStack>
          </GridItem>
        ))
        }

        <GridItem colStart={1} colEnd={5} rowStart={10} rowEnd={11}>
          <HStack justifyContent={'space-around'} width={'100%'} justifySelf={'end'} alignSelf={'flex-end'}>
          {
              github &&
              <Link href={github} isExternal>
                <Icon as={AiFillGithub} />
              </Link>
            }
          <Badge variant={'subtle'} colorScheme={'blue'}>{type}</Badge>
          </HStack>
        </GridItem>

      </Grid>
    </Box>
  )

}


const ProjectCardGridMobile = () => {

  const web3Projects = projects.filter(project => project.title.includes('Web3'));

  const portfolios = [projects, web3Projects];

  return (
    <Box mx={{ 'sm': '0%' }} pt={"7.5vh"} pb={'25rem'} justifyContent={"center"} width={{ 'sm': '100%' }} backgroundColor={"gray.200"} height={"100%"} minHeight={'100vh'}>
      <Tabs isFitted position={'fixed'} mb={'2rem'} width={'100%'} height={'100%'}>
        <TabList bg={'white'} px={{ 'sm': '0px', 'md': '25vw' }}>
          <Tab>All</Tab>
          <Tab>Web3</Tab>
        </TabList>
        <TabPanels >
          {portfolios.map((portfolio, index) => (
            <TabPanel overflowY={'scroll'} height={'85vh'} width={'100vw'} px={{ 'sm': '3vw', 'md': '25vw' }} pb={'10vw'} key={index}>
            {portfolio.map((project, index) => <CardMobile {...project} key={index} />)}
          </TabPanel>
          ))}
          {/* <TabPanel overflowY={'scroll'} height={'85vh'} width={'100vw'} px={{ 'sm': '3vw', 'md': '25vw' }} pb={'10vw'}>
            {projects.map((project, index) => <CardMobile {...project} key={index} />)}
          </TabPanel>
          <TabPanel>
          {web3Projects.map((project, index) => <CardMobile {...project} key={index} />)}

          </TabPanel> */}
        </TabPanels>
      </Tabs>

    </Box>

  )
}

export default ProjectCardGridMobile
