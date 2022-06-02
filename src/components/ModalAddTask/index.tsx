import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Textarea,
    useToast,
    Select,
    Flex,
    FormErrorMessage,
} from '@chakra-ui/react'
import { useState, FormEvent, useContext } from 'react'
import { TasksContext } from '../../TasksContext'

interface newTaskAddProps {
    isOpen: boolean
    onClose: () => void
}

const ModalAddTask = ({ isOpen, onClose }: newTaskAddProps) => {
    const { tasks, createTask } = useContext(TasksContext)
    const toast = useToast()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')

    async function handleCreateTask(event: FormEvent) {
        event.preventDefault()
        console.log(tasks?.length)
        if (tasks?.length < 5) {
            const task = { title, description, priority }
            await createTask(task)
            setTitle('')
            setDescription('')
            setPriority('')
            onClose()
        } else {
            return toast({
                title: 'Número de tarefas excedito.',
                description:
                    'Não é possível adicionar mais tarefas, exclua as tarefas concluidas e tente novamente.',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        }
    }

    const isErrorTitle = title === ''
    const isErrorDesc = description === ''
    const isErrorPriority = priority === ''

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Adicionar nova task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box as={'form'} onSubmit={handleCreateTask}>
                        <FormControl isInvalid={isErrorTitle} isRequired>
                            <Box>
                                <FormLabel fontSize={'0.8rem'} htmlFor="title">
                                    Título da Task
                                </FormLabel>
                                <Input
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(event) =>
                                        setTitle(event.target.value)
                                    }
                                />
                                {!isErrorTitle ? null : (
                                    <FormErrorMessage fontSize={'0.7rem'}>
                                        O campo precisa ser preenchido.
                                    </FormErrorMessage>
                                )}
                            </Box>
                        </FormControl>
                        <FormControl
                            isInvalid={isErrorDesc}
                            isRequired
                            pt={'1rem'}
                        >
                            <FormLabel
                                fontSize={'0.8rem'}
                                htmlFor="description"
                            >
                                Descrição
                            </FormLabel>
                            <Textarea
                                isRequired
                                id="description"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                            {!isErrorDesc ? null : (
                                <FormErrorMessage fontSize={'0.7rem'}>
                                    O campo precisa ser preenchido.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired
                            isInvalid={isErrorPriority}
                            pt={'1rem'}
                        >
                            <Select
                                placeholder="Selecionar a Prioridade"
                                value={priority}
                                onChange={(event) =>
                                    setPriority(event.target.value)
                                }
                            >
                                <option value="baixa">Baixa</option>
                                <option value="media">Média</option>
                                <option value="alta">Alta</option>
                                <option value="critica">Crítica</option>
                            </Select>
                            {!isErrorPriority ? null : (
                                <FormErrorMessage fontSize={'0.7rem'}>
                                    O campo precisa ser selecionado.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <Flex width={'100%'} justify={'center'}>
                            <Button
                                mt={'2rem'}
                                colorScheme="blue"
                                p={'0.5rem 2rem'}
                                type={'submit'}
                            >
                                Salvar Tarefa
                            </Button>
                        </Flex>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalAddTask
