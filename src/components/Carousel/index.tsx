import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';




export default function Carousel() {
    return (
        <Flex w={'100%'} maxWidth="1240" mx='auto' mb={['5', '10']} h={['250px', '450px']}>

            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay:4000}}
                  style={{width: '100%', flex: '1'}}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}>

                <SwiperSlide>
                    <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europa.png)"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center">
                        <Link href="/continente/europa">
                            <a>
                            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                      <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>continente mais antigo</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europa.png)"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center">
                        <Link href="/continente/europa">
                            <a>
                            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                      <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>continente mais antigo</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europa.png)"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center">
                        <Link href="/continente/europa">
                            <a>
                            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                      <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>continente mais antigo</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                
            </Swiper>
        </Flex>
    )
}