import { importSchema } from 'graphql-import'

const typeDefs = importSchema('src/schema.graphql');

export { typeDefs };