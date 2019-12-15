import React from 'react'
import { Link } from 'react-router-dom'
import {
    Table,
    Icon,
    Label,
    Button
} from 'semantic-ui-react'

class AuctionList extends React.Component {

    render() {
        let { auctions, pageIndex } = this.props
        return (
            <Table celled striped selectable sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Icon link name="configure" title="Operations" />
                        </Table.HeaderCell>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Icon link name="money" title="Price" />
                        </Table.HeaderCell>{
                            <Table.HeaderCell>
                                <Icon link name="gift" title="Has Promotion" />
                            </Table.HeaderCell>}
                        <Table.HeaderCell>
                            <Icon link name="eye" title="View count" />
                        </Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Town</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Icon link name="tag" title="Tags" />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {auctions.sort((a, b) => b.has_promotion - a.has_promotion).slice(pageIndex * 5, (pageIndex + 1) * 5).map((auction, i) => {
                        return (
                            <Table.Row key={i}>
                                <Table.Cell>
                                    <Button as={Link} to={`/auction/${auction.id}`} icon>
                                        <Icon name='eye' title="View details" />
                                    </Button>
                                </Table.Cell>
                                <Table.Cell>{5 * pageIndex + i + 1}</Table.Cell>
                                <Table.Cell>{auction.title}</Table.Cell>
                                <Table.Cell>{auction.price}</Table.Cell>
                                <Table.Cell>{
                                    auction.has_promotion ? <Icon color="green" link name="plus" /> : <Icon color="red" link name="close" />
                                }</Table.Cell>
                                <Table.Cell>{auction.view_count}</Table.Cell>
                                <Table.Cell>{auction.city}</Table.Cell>
                                <Table.Cell>{auction.town}</Table.Cell>
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
                        )
                    })}
                </Table.Body>
            </Table>
        )
    }

}

export default AuctionList