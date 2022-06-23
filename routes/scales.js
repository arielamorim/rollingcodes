import scales from '../handlers/scales.js'

async function routes (fastify, options) {

    fastify.get('/:tom/:variation', scales);

}

export default routes;