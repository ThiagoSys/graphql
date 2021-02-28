'use strict'

const cors = require('cors')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express();
const port = process.env.port || 4000
const isDev = process.env.NODE_ENV !== 'production'

const typeDefs =  readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)

const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})

