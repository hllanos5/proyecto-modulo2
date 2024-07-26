import swaggerAutogen from 'swagger-autogen';
import { HOST } from './config/ServerConfig.js';

const doc = {
    info: {
        title: 'Blog',
        description: 'Esto es una API de Blog creada por HanSoft'
    },
    host: HOST,
    servers: [
        {
            url: "http://localhost:3000/api/v1"
        }
    ]
};
const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

//swaggerAutogen()(outputFile, routes, doc);

swaggerAutogen({openapi:"3.0.0"})(outputFile, routes, doc).then(async () => {
        await import('./src/index.js')
    }
);
