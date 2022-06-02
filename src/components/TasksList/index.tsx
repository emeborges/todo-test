/* eslint-disable react/jsx-key */
import {
    Box,
    Flex,
    Text,
    IconButton,
    useDisclosure,
    Divider,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'

import { TasksContext } from '../../TasksContext'
import { priorityReturn } from '../../utils/generalFunctions'
import { tasksProps } from '../../utils/types'
import ModalDetailsTask from '../ModalDetailsTask'

const TasksList = () => {
    const { tasks, deleteTask } = useContext(TasksContext)
    const [clicked, setClicked] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    function openModal(task: tasksProps) {
        setClicked(task)
        onOpen()
    }

    return (
        <Flex
            w={'100%'}
            alignItems={'center'}
            justify={'center'}
            direction={'column'}
            bg={'#F6F6F6'}
        >
            {tasks?.map((task) => {
                return (
                    <>
                        <Flex
                            w={'100%'}
                            alignItems={'center'}
                            justify={'space-between'}
                            p={'1rem 1rem'}
                        >
                            <Box maxW={'60%'} w={'100%'}>
                                <Text>{task.title}</Text>
                            </Box>
                            <Flex
                                fontSize={'12px'}
                                align={'center'}
                                justify={'space-between'}
                                width={'35%'}
                            >
                                {priorityReturn(task.priority)}
                                <IconButton
                                    variant="outline"
                                    aria-label="Show details"
                                    icon={<BiMessageSquareDetail />}
                                    onClick={() => openModal(task)}
                                    transition={
                                        'background 0.5s ease-out, color 0.5 ease-out'
                                    }
                                    _hover={{
                                        background: '#333',
                                        color: '#F6F6F6',
                                    }}
                                    size={'sm'}
                                />
                                <IconButton
                                    variant="outline"
                                    aria-label="Delete Post"
                                    icon={<AiOutlineDelete />}
                                    transition={
                                        'background 0.5s ease-out, color 0.5 ease-out'
                                    }
                                    onClick={() => deleteTask(task?.id)}
                                    _hover={{
                                        background: '#b02d2d',
                                        color: '#F6F6F6',
                                    }}
                                    size={'sm'}
                                />
                            </Flex>
                        </Flex>
                        <Divider width={'80%'} margin={'0 auto'} />
                    </>
                )
            })}

            <ModalDetailsTask
                task={clicked}
                isOpen={isOpen}
                onClose={onClose}
            />
        </Flex>
    )
}

export default TasksList
