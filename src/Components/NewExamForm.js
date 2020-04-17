import React from 'react'
import { Grid, Header, Segment, Portal, Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import SubmitForm from './SubmitForm'

class NewExamForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open:false,
        }
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        const {open} = this.state;
        return (
            <Grid columns={2}>
            <Grid.Column>
              <Button
                content='Add Document'
                disabled={open}
                positive
                onClick={this.handleOpen}
              />
    
              <Portal onClose={this.handleClose} open={open}>
                <Segment
                  style={{
                    left: '40%',
                    position: 'fixed',
                    top: '50%',
                    zIndex: 1000,
                  }}
                >
                  <SubmitForm classID={this.props.classID}></SubmitForm>

                </Segment>
              </Portal>
            </Grid.Column>
          </Grid>
        )
    }
}
export default NewExamForm;