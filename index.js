import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

// Routes
import scales from './routes/scales.js'

fastify.register( scales, { prefix: '/scales'});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
})

/**
* Run the server!
*/
const start = async () => {
    try {
        await fastify.listen({ port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();