import React from 'react'
import { graphql } from 'react-apollo'

import { getAuctionsQuery } from '../queries/queries'
import { compose } from 'recompose'

import AuctionList from '../components/AuctionList'
import { Container, Pagination } from 'semantic-ui-react'

class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 0
        }
    }

    setPageNum = (event, { activePage }) => {
        this.setState({ pageIndex: activePage - 1 })
    }

    displayAuctions() {
        const { loading, auctions } = this.props.getAuctionsQuery
        if (loading)
            return null

        return (
            <Container>
                <AuctionList auctions={auctions} pageIndex={this.state.pageIndex} />
                <center>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        onPageChange={this.setPageNum}
                        totalPages={Math.round(auctions.length / 5)}
                    />
                </center>
            </Container>
        )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.displayAuctions()}
                </header>
            </div>
        )
    }

}

export default compose(
    graphql(getAuctionsQuery, {
        name: 'getAuctionsQuery',
        //options: (props) => ({ variables: { limit: 3 } })
    })
)(MainPage)