const mongoose = require('mongoose')
const Auction = require('./models/auction')

const { MONGO_USERNAME, MONGO_PW, MONGO_DB_NAME } = process.env

if (!MONGO_USERNAME || !MONGO_PW || !MONGO_DB_NAME) {
    console.warn('Connection infos are empty! be carrefull you have .env file not .env.example in prod mode'.red)
}

const connectionURI = `mongodb://${MONGO_USERNAME}:${MONGO_PW}@mongo/${MONGO_DB_NAME}?authSource=${MONGO_DB_NAME}`
mongoose.connect(connectionURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to db'.green)
}).catch(err => {
    console.warn('Cannot connect to db'.red, err)
    console.log('App is closing -docker will restart again-'.red)
    process.exit()
})

module.exports = {
    Auction
}