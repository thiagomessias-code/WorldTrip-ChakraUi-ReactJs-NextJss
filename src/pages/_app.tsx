import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import {theme} from '../styles/theme'
import '../styles/carousel.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
