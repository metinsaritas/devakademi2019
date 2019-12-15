import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
})

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>, document.getElementById('root'))
