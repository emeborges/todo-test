import { createServer, Model } from 'miragejs'
import Home from './home'

createServer({
    models: {
        task: Model,
    },
    seeds(server) {
        server.db.loadData({
            tasks: [
                {
                    id: 1,
                    title: 'Levar o lixo',
                    description: 'Tirar o lixo e coloca-lo na lixeira.',
                    priority: 'media',
                    status: 'realizado',
                },
                {
                    id: 2,
                    title: 'Cachorro Veterinário',
                    description: 'Levar o Bimbo no veterinário da rua Paixão..',
                    priority: 'alta',
                    status: 'aberto',
                },
            ],
        })
    },
    routes() {
        this.get('/api/tasks', () => {
            return this.schema.all('task')
        })

        this.post('/api/add/task', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('task', data)
        })

        this.del('/api/tasks/:id', (schema, request) => {
            const id = request.params.id

            return schema.tasks.find(id).destroy(), this.schema.all('task')
        })
    },
})

export default function App() {
    return <Home />
}
