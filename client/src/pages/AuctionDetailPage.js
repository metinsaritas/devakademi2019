import React from 'react'

import { graphql } from 'react-apollo'
import { getAuctionQuery } from '../queries/queries'
import { compose } from 'recompose'
import { Container, Table, Label } from 'semantic-ui-react'
class AuctionDetailPage extends React.Component {

    displayAuction() {
        const { loading, auction } = this.props.getAuctionQuery
        if (loading)
            return null

        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{ width: "70px" }}>Id</Table.HeaderCell>
                        <Table.Cell>{auction.id}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.Cell>{auction.title}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.Cell>{auction.description}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.Cell>{auction.price}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Has Promotion</Table.HeaderCell>
                        <Table.Cell>{auction.has_promotion}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>View Count</Table.HeaderCell>
                        <Table.Cell>{auction.view_count}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.Cell>{auction.city}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Town</Table.HeaderCell>
                        <Table.Cell>{auction.town}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.Cell>
                            {
                                Array(7).fill().map((val, i) => {
                                    let data = auction["c" + i]
                                    if (!data)
                                        return null

                                    return (
                                        <Label key={i} as="a" tag>
                                            {data}
                                        </Label>
                                    )
                                })
                            }
                        </Table.Cell>
                    </Table.Row>

                </Table.Header>
            </Table>
        )
    }

    render() {

        return (
            <Container>
                {this.displayAuction()}
            </Container>
        )
    }

}

export default compose(
    graphql(getAuctionQuery, {
        name: 'getAuctionQuery',
        options: (props) => ({ variables: { id: props.match && props.match.params && props.match.params.id } })
    })
)(AuctionDetailPage)