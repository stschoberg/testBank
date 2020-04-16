import React from 'react'
import { Segment, Header } from 'semantic-ui-react'


class ClassDetails extends React.Component {
    render() {
        return (
            <Segment>
                <Header as='h3'>{this.props.class.id}</Header>
                <Header as='h4'>{this.props.class.className}</Header>

                <p>TODO: Allow exam uploads</p>
                <p>TODO: Show exams for this class</p>
            </Segment>
        )
    }
}

export default ClassDetails;