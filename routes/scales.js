import scales from '../handlers/scales.js'

async function routes (fastify, options) {

    fastify.get('/', scales);

}

export default routes;