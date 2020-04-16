import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
class ClassTable extends Component {
  state = {
    column: null,
    data: this.props.classes,
    direction: null,
  }

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state
    console.log(data)
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {
    const { column, data, direction } = this.state

    return (
     <div>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'Course' ? direction : null}
              onClick={this.handleSort('id')}
            >
              Course
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'Name' ? direction : null}
              onClick={this.handleSort('className')}
            >
              Name
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data.slice(this.state.data.slice(this.state.page * 25,(this.state.page + 1) * 25)), ({ id, className }) => (
            <Table.Row key={id}>
              <Table.Cell>
              <NavLink to={`/class/${id}`} id={id}>{id}</NavLink>
              </Table.Cell>
              <Table.Cell>{className}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

            </div>
    )
  }
}

export default ClassTable