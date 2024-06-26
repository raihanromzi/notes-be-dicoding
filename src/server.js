import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
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
