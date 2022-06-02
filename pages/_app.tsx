import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import Fonts from '../src/fonts'
import { TasksProvider } from '../src/TasksContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TasksProvider>
            <ChakraProvider resetCSS theme={theme}>
                <Fonts />
                <Component {...pageProps} />
            </ChakraProvider>
        </TasksProvider>
    )
}

export default MyApp
