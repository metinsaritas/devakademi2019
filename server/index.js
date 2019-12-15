require('dotenv').config()
require('colour')
const express = require('express')
const morgan = require('morgan')

const app = express()
const server = require('http').createServer(app)
const PORT = 8080
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphqlSchema')


app.set('json spaces', 3)
app.use(morgan('tiny'))
app.get('/', (req, res) => res.send("Test"))

const apolloServer = new ApolloServer({
    typeDefs, resolvers
})

apolloServer.applyMiddleware({app})

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`.blue))