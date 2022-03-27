import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Carousel from "../components/Carousel";
import { Header } from "../components/Header/Header";
import Separador from "../components/Separador";


export default function Home() {
  return (
    <Flex direction={'column'}>
      <Header />
      <Banner />
      <Caracteristicas/>
      <Separador/>
      <Heading 
      textAlign={'center'}
      fontWeight='500'
      mb={['5', '14']}
      fontSize={['lg', '3xl', '4xl']}
      >
        Bora mudar?<br /> Então vamos juntar as malas e vir para portugal!
      </Heading>
      <Carousel/>
    </Flex>

  )
}
