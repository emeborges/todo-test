import { Flex, Text, Heading } from '@chakra-ui/react'
import { FcTodoList } from 'react-icons/fc'

const Details = () => {
    const data = new Date()
    const dataBr = data.toLocaleDateString('pt-BR')

    return (
        <Flex
            w={'100%'}
            alignItems={'center'}
            justify={'center'}
            direction={'column'}
        >
            <Flex
                justifyContent={'space-between'}
                w={'100%'}
                p={'0rem 0.5rem'}
                fontSize={'0.8rem'}
            >
                <Text>Londrina, PR - BR</Text>
                <Text>{dataBr}</Text>
            </Flex>
            <Flex fontSize={'2.5rem'} align={'center'}>
                <FcTodoList />
                <Heading as={'h2'} p={'1rem'} display={'flex'}>
                    ToDo List
                </Heading>
            </Flex>
        </Flex>
    )
}

export default Details
