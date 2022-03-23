import { Heading, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from '../data/data';


const ProjectCardGrid = ({ title, description, image, valueAdd, responsibilites, skills, type }: IProjectSpec) => {

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
    <Box height={{"md" : "45vh", 'ld' : '35vh'}} backgroundColor={"white"} margin={"2rem"} pt={1}>
      <Grid h={'100%'} width={'100%'} templateColumns={'repeat(9, 1fr)'} templateRows={'repeat(10, 1fr)'} gap={3} padding={3}>
        {/* -
     - Image Component 
     */}

        <GridItem colStart={1} colEnd={7} rowStart={1} rowEnd={6} bg={'black'}>
          <Image
            height={"100%"}
            width={'100%'}
            objectFit='fill'
            src={image}
            alt='Logo JLHDEV'
          />
        </GridItem>

        <GridItem colStart={7} colEnd={11} rowStart={1} rowEnd={6}>
          <VStack align={'flex-start'} height={'full'}>
            <Heading as={'h3'} size={'l'} >
              {title}
            </Heading>
            <Text>{description}</Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={10} rowStart={6} rowEnd={7}>
          <Flex align={'baseline'}>
            {skills.map(skill => <Badge key={skill} variant={'subtle'} colorScheme={'blue'} mr={'0.5rem'}>{skill}</Badge>)}
            <Badge variant={'subtle'} colorScheme={'blue'}>REACT</Badge>
          </Flex>
        </GridItem>

        <GridItem colSpan={10} rowStart={7} rowEnd={10}>
          <VStack>
            {roles.map(({ role, icon, title }, index) => (
              <HStack width={'100%'} gap={3}>
                <Flex width={'3rem'} height={'3rem'} bg={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={'5px'}>
                  <Icon as={icon} width={'1.5rem'} height={'1.5rem'} bg={'gray.200'} />
                </Flex>
                <VStack justifyContent={'start'} alignContent={'start'} align={'flex-start'}>
                  <Heading as={'h6'} size={'xs'}>{title}</Heading>
                  <Text fontSize={{'sm': '0.8rem','md' : '1rem'}}>{role}</Text>
                </VStack>
                {index === 0 && <Spacer />}
              </HStack>

            ))}
          </VStack>
        </GridItem>

        <GridItem colStart={3} colEnd={8} rowStart={10} rowEnd={11} >
          <HStack justifyContent={'space-around'} width={'100%'} justifySelf={'end'} alignSelf={'flex-end'}>
            <Icon as={AiFillTwitterSquare} />
            <Icon as={AiFillTwitterSquare} />
            <Icon as={AiFillTwitterSquare} />
          </HStack>
        </GridItem>

        <GridItem colStart={9} colEnd={10} rowStart={10} rowEnd={11} width={'100%'}>
          <Badge variant={'subtle'} colorScheme={'blue'}>Commercial</Badge>
        </GridItem>



      </Grid>
    </Box>
  )
}

export default ProjectCardGrid