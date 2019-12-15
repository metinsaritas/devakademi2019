import { gql } from "apollo-boost"

const getAuctionsQuery = gql`
    query {
        auctions {
            id
            title
            description
            price
            has_promotion
            view_count
            city
            town
            c0
            c1
            c2
            c3
            c4
            c5
            c6
        }
    }
`

const getAuctionQuery = gql`
    query GetAuction ($id: ID) {
        auction (id: $id) {
            id
            title
            description
            price
            has_promotion
            view_count
            city
            town
            c0
            c1
            c2
            c3
            c4
            c5
            c6
        }
    }
`

export {
    getAuctionsQuery,
    getAuctionQuery
}