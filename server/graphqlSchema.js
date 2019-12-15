const util = require('util')
const redis = require('redis')
const { gql } = require('apollo-server-express')
const { Auction } = require('./db')

let redisConnectionState = false
const redisClient = redis.createClient(6379, 'redis')
redisClient.on('connect', () => {
    redisConnectionState = true
    console.log('Connected to redis'.green)
})
redisClient.on('error', (err) => {
    redisConnectionState = false
    console.log('Cannot connect to redis'.red, err)
})

const redisGetAsync = util.promisify(redisClient.get).bind(redisClient)

const typeDefs = gql`
    type Query {
        auctions: [Auction]
        auction (id: ID): Auction
    }

    type Auction {
        id: ID!
        title: String
        description: String
        price: Float
        has_promotion: Int
        view_count: Int
        city: String
        town: String
        c0: String
        c1: String
        c2: String
        c3: String
        c4: String
        c5: String
        c6: String
    }
`

const resolvers = {
    Query: {
        auctions: async (root, args) => await Auction.find(),
        auction: async (root, {id}) => {
            let cache = null
            if (redisConnectionState) {
                cache = await redisGetAsync(id);
            }

            if (cache === null) {
                let data = await Auction.findOne({id})
                if (data !== null) {
                    redisClient.set(id, JSON.stringify(data))
                }
                return data
            }

            let data = null;
            try {
                console.log('Found in redis'.blue, cache)
                data = JSON.parse(cache)
            }
            catch (err) {
                console.log('Data parse error'.blue, err)
                return null
            }
            return data 
        }
    }
}

module.exports = {
    typeDefs, resolvers
}