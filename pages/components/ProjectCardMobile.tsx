import type { NextPage } from 'next';
import { Heading, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from '../data/data';

const ProjectCardGridMobile = ({ title, description, image, valueAdd, responsibilites }: IProjectSpec) => {

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
  }
  ]

  return (
    <Box height={"50vh"} width={"90vw"} backgroundColor={"white"} mb={4} pt={1} mx={'5vw'} boxShadow={'md'}>
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
              <Heading as={'h6'} size={'sm'}>{title} Name</Heading>
              <Text fontSize={'0.9rem'}>{description}</Text>
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

        {roles.map(({ role, title, icon, colStart }) => (
          <GridItem colStart={colStart} colSpan={2} rowStart={7} rowEnd={10} mx={1} mt={3} key={`${title} ${colStart}`}>
            <VStack align={'start'}>
              <HStack>
                <Flex width={'2rem'} height={'2rem'} bg={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={'5px'}>
                  <Icon as={icon} width={'1.5rem'} height={'1.5rem'} bg={'gray.200'} />
                </Flex>
                <Text>{title}</Text>
                {/* <Text>{valueAdd}</Text> */}
              </HStack>
              <Text fontSize={'0.8rem'}>
                {role}
              </Text>
            </VStack>
          </GridItem>
        ))
        }

        <GridItem colStart={1} colEnd={5} rowStart={10} rowEnd={11} bg={'black'}>
        </GridItem>

      </Grid>
    </Box>
  )
}

export default ProjectCardGridMobile
