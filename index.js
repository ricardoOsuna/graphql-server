import * as _ from 'lodash';
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';

// Define underscorejs
// https://underscorejs.org/
global._ = _;

// If it´s necessary use the .env file, put the next line to load data to process.env
require('dotenv').config();
const port = process.env.APP_PORT;

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app })
app.listen(port, () =>
  console.log(`Server Online in http://localhost:${port}${server.graphqlPath}`)
);