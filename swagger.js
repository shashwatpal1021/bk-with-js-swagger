// const swaggerAutogen = require('swagger-autogen')()
import swaggerAutogen from 'swagger-autogen'
const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/**.js']

swaggerAutogen(outputFile, endpointsFiles)