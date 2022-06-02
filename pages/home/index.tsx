import { Flex } from '@chakra-ui/react'
import AddTask from '../../src/components/AddTask'
import Details from '../../src/components/Details'
import TasksList from '../../src/components/TasksList'

const Home = () => {
    return (
        <Flex
            bg={'#5EB4FC'}
            minW={'100%'}
            minH={'100vh'}
            alignItems={'center'}
            justify={'center'}
        >
            <Flex
                bg={'#fff'}
                alignItems={'center'}
                justify={'center'}
                direction={'column'}
                w={'100%'}
                maxW={'500px'}
                h={'100%'}
                borderRadius={'8px'}
            >
                <Details />
                <TasksList />
                <AddTask />
            </Flex>
        </Flex>
    )
}

export default Home
