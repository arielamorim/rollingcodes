import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

// Routes
import scales from './routes/scales.js'
fastify.register( scales, { prefix: '/scales'});

// Run
const start = async () => {
    try {
        await fastify.listen({ port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();