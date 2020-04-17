import React from 'react'
import {Label, Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import S3ImageUpload from './S3ImageUpload'
const semesterOptions = [
    { key: 'fall2020', text: 'fall2020', value: 'fall2020' },
    { key: 'spring2019', text: 'spring2019', value: 'spring2019' },
    { key: 'fall2019', text: 'fall2019', value: 'fall2019' },
  ]

class SubmitForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUploading: false,
            professor: '',
            semester: '',
            documentName: '',
            file: ''
        }
    }


    setDocName = (e, {val}) => {
        this.setState({document: val})
    }
    setProf = (e, {val}) => {
        this.setState({professor: val})
    }
    setSemester = (e, {val}) => {
        this.setState({semester: val})
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
            id='form-input-control-document-name'
            control={Input}
            name="documentName"
            label='Document Name'
            placeholder='Document Name'
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            name="semester"
            options={semesterOptions}
            label={{ children: 'Semester', htmlFor: 'form-select-control-semester' }}
            placeholder='Semester'
            onChange={this.handleChange}
            search
            searchInput={{ id: 'form-select-control-semester' }}
          />
        </Form.Group>
        <Form.Field
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