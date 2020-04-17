import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import _ from 'lodash'
import { Storage, graphqlOperation, API } from 'aws-amplify';
import * as Queries from '../Queries'



class ClassDetailsTable extends React.Component{
    constructor(props){
      super(props)
    
    this.state = {
        column: null,
        data: [],
        metaData: {},
        direction: null,
        metaData: {

        }

      }
      this.getMetaData = this.getMetaData.bind(this)
      this.getExams = this.getExams.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
      this.getExams().then(exams => this.doStuff(exams))



    }

    doStuff = exams => {
      this.setState({data: exams});
      this.getMetaData().then(x => Promise.all(x).then(z => this.setState({metaData: z})))
    }

    getMetaData = async () => {
              const q = _.map(this.state.data, async fileName => await Storage.get(`uploads/${fileName}`, {download: true})
              .then(x => x.Metadata).catch(err=>"NONE"))


              return q
    }

     getExams = async () => {
        const d =  await API.graphql(graphqlOperation(
          Queries.getClassDetails(this.props.classID)))
          .then(data =>(data.data.getClass.exams)) 

        return d
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
      console.log("YOYOYOY")
      console.log(this.state)
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
          {_.map(this.state.metaData, id => (
            //  console.log("SHIT")
            <Table.Row key={id}>
              <Table.Cell>
              <Button onClick={() => this.handleDownload(id)} animated='fade'>
                <Button.Content visible>{id.documentname}</Button.Content>
                <Button.Content hidden>Download</Button.Content>
                </Button>            
              </Table.Cell>
              <Table.Cell>{id.semester}</Table.Cell>
              <Table.Cell>{id.professor}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
   </div> )}
}
export default ClassDetailsTable;