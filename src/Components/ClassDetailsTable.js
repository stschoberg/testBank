import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import { Storage, graphqlOperation, API } from 'aws-amplify';
import * as Queries from '../Queries'
import Async from 'react-promise'



class ClassDetailsTable extends React.Component{

    state = {
        column: null,
        data: [],
        direction: null,
        metaData: {

        }
      }

    componentDidMount () {
      console.log("SHIT")
        this.setState({data: this.getExams()})
        console.log("STATE")
        console.log(this.state.data)
    }



     getExams = async () => {
        const d =  await API.graphql(graphqlOperation(Queries.getClassDetails(this.props.classID))).then(res => res.data.getClass.exams)
        const q = _.map(d, async fileName => await Storage.get(`uploads/${fileName}`, {download: true})
              .then(x => x.Metadata).catch(x=>"NONE"))
        return q
    }

      handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state
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


      handleDownload = async(classID) => {
          console.log("DOWNLOAD")
          console.log(classID)
          const link = await Storage.get(`uploads/${classID}`, {download: true}).then(x=>console.log(x))
          // window.open(link, '_blank')
          console.log(link)
      }
    render(){ 
        console.log(this.state.data.length)
        const { column, data, direction } = this.state
        // const z = exams.then(x => console.log(x))
        // console.log("Z")

        return (
        <div>
    
        <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'Course' ? direction : null}
              onClick={this.handleSort('id')}
            >
              Document Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'Name' ? direction : null}
              onClick={this.handleSort('className')}
            >
              Semester
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'Name' ? direction : null}
              onClick={this.handleSort('className')}
            >
              Professor
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(this.state.data, id => (
            //  console.log("SHIT")
            <Table.Row key={id}>
              <Table.Cell>
              <Button onClick={() => this.handleDownload(id)} animated='fade'>
                <Button.Content visible>{id.documentName}</Button.Content>
                <Button.Content hidden>Download</Button.Content>
                </Button>            
              </Table.Cell>
              <Table.Cell>{id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
   </div> )}
}
export default ClassDetailsTable;