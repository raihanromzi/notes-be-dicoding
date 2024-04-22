import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost',
    routes: {
      // cors di server level
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        headers: [
          'Accept',
          'Authorization',
          'Content-Type',
          'If-None-Match',
          'Accept-language',
        ], // all default apart from Accept-language
        additionalHeaders: [
          'cache-control',
          'x-requested-with',
          'Access-Control-Allow-Origin',
        ],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
