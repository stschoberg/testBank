import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import S3ImageUpload from './S3ImageUpload'
import ClassDetailsTable from './ClassDetailsTable'
import NewExamForm from './NewExamForm'
class ClassDetails extends React.Component {
    render() {
        return (
            <Segment>
                <Header as='h3'>{this.props.class.id}</Header>
                <Header as='h4'>{this.props.class.className}</Header>
                <NewExamForm classID={this.props.class.id}/>
                {/* <S3ImageUpload classID={this.props.class.id}/> */}

                <ClassDetailsTable classID={this.props.class.id}/>
            </Segment>
        )
    }
}

export default ClassDetails;