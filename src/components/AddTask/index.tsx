import { Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io'
import ModalAddTask from '../ModalAddTask'

const Task = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            w={'100%'}
            alignItems={'center'}
            justify={'center'}
            p={'0rem 0.5rem'}
        >
            <IconButton
                position={'relative'}
                top={'-22px'}
                variant="outline"
                aria-label="Show details"
                icon={<IoMdAdd />}
                transition={'background 0.5s ease-out, color 0.5 ease-out'}
                _hover={{ background: '#5EB4FC', color: '#F6F6F6' }}
                fontWeight={'700'}
                size={'lg'}
                borderRadius={'100%'}
                bg={'#fff'}
                onClick={onOpen}
            />
            <ModalAddTask isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}

export default Task
