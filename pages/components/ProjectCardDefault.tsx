import { Heading, Box, Flex, Text, Image, VStack, HStack, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Badge, Grid, GridItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GrDiamond } from 'react-icons/gr';
import { Gi3DHammer } from 'react-icons/gi';
import { IProjectSpec, projects } from '../data/data';

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
              {title} Name
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
  