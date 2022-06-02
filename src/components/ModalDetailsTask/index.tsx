import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Box,
    ModalFooter,
    Button,
} from '@chakra-ui/react'
import { priorityReturn } from '../../utils/generalFunctions'
import { tasksProps } from '../../utils/types'

interface newTaskAddProps {
    isOpen: boolean
    onClose: () => void
    task: tasksProps
}

const ModalDetailsTask = ({ isOpen, onClose, task }: newTaskAddProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text fontSize={'0.8rem'}>Tarefa:</Text> {task.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box pb={'1rem'}>{priorityReturn(task.priority)}</Box>
                    <Text fontSize={'0.8rem'}>Descrição </Text>
                    <Text>{task.description}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        border={'1px solid #333'}
                        color={'#333'}
                        transition={'background 0.4, color 0.4, border 0.4'}
                        _hover={{
                            background: 'green.400',
                            color: '#fff',
                            border: 'none',
                        }}
                        onClick={() => (task.status = 'ok')}
                    >
                        {' '}
                        Concluir tarefa!{' '}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalDetailsTask
