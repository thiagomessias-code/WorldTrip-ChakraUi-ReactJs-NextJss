import { Flex, Grid, Icon, Image, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import {RiArrowLeftLine} from 'react-icons/ri'


export function Header() {
    const {asPath} = useRouter();
    const notHomePage = asPath != '/'
    return (
        <Flex
            bg={'white'}
            w='100%'
            as={'header'}
            mx={'auto'}
            px={'1rem'}
            h={['50px', '100px']}
            align={'center'}
            justify={'center'}
        >
            <Grid
                h={'100%'}
                mx={'auto'}
                w={'100%'}
                maxWidth='1160px'
                alignItems={'center'}
                templateColumns={'repeat(3, 1fr)'}
                justifyContent={'center'}
            >
                {notHomePage && (
                    <Link href="/"><a href="">
                        <Icon as={RiArrowLeftLine} fontSize={[20, 40]} justifySelf="start"/>
                        </a></Link>
                )}
                <Image
                w={['84px', '184px']}
                src='/logo.svg' 
                alt='Um avião'
                justifySelf={'center'}
                gridColumn={'2'}
                />


            </Grid>
        </Flex>

    )
}