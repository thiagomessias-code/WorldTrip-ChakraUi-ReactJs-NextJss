import { Flex } from "@chakra-ui/react"
import { Header } from "../components/Header/Header"
import ContinentBanner from "../components/ContinentBanner"
import Content from "../components/Content"
import Cities from '../components/Cities/index'


export default function Continent() {
    return (
        <Flex direction={'column'}>
            <Header />
            <ContinentBanner />
            <Flex direction={'column'}
            maxWidth="1168" mx='auto' mb='10' px='1rem'>
                <Content/>
                <Cities/>
            </Flex>
        </Flex>
    )
}