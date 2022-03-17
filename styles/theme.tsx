import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const breakpoints = {
    'sm' : '700px',
    'md' : '1000px',
    'lg' : '1235px'
}



export const theme = extendTheme({ colors, breakpoints })