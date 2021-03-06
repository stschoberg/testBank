import React from 'react'
import {Label, Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import S3ImageUpload from './S3ImageUpload'
import getPastSemesters from '../Util'



const util = require('../Util');
const pastSems = util.getPastSemesters()


class SubmitForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUploading: false,
            professor: '',
            semester: '',
            documentName: '',
            file: '',
        }
    }

    handleChange = (event, {value}) => {
        // console.log(event.target.value)
        // console.log(event.target.name)
        const s = event.target.name
        if(s){
            this.setState({[s] : value})
        }
        else{
            // work around to set semester. idk man
            this.setState({'semester':value})
        }
    }

    render(){
        return (
        <Form>
        <Form.Group widths='equal'>
          <Form.Field
            error={this.state.documentName === ''}
            id='form-input-control-document-name'
            control={Input}
            name="documentName"
            label='Document Name'
            placeholder='Document Name'
            onChange={this.handleChange}
          />
          <Form.Field
            error={this.state.semester === ''}
            control={Select}
            name="semester"
            options={pastSems}
            label={{ children: 'Semester', htmlFor: 'form-select-control-semester' }}
            placeholder='Semester'
            onChange={this.handleChange}
            search
            searchInput={{ id: 'form-select-control-semester' }}
          />
        </Form.Group>
        <Form.Field
            error={this.state.professor === ''}
            name="professor"
            id='form-input-control-professor'
            control={Input}
            label='Professor'
            placeholder='Professor'
            onChange={this.handleChange}
          />
            <S3ImageUpload classID={this.props.classID} metaData={this.state}></S3ImageUpload>
      </Form>)
    }
}

export default SubmitForm;