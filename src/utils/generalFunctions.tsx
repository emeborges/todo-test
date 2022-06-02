import { Badge } from '@chakra-ui/react'

export function priorityReturn(priority: string) {
    if (priority === 'baixa') {
        return <Badge>Baixa</Badge>
    } else if (priority === 'media') {
        return <Badge colorScheme="blue">Media</Badge>
    } else if (priority === 'alta') {
        return <Badge colorScheme="purple">Alta</Badge>
    } else {
        return <Badge colorScheme="red">Crítica</Badge>
    }
}
