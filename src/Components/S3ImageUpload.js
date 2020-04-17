import React from 'react'
import {v4 as uuid} from 'uuid';
import { Form } from 'semantic-ui-react';
import { Storage, graphqlOperation, API } from 'aws-amplify';
import * as Queries from '../Queries'

class S3ImageUpload extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            uploading: false,
            file: '',
            fileName: ''
        }
    }
    handleChange = (e) => {
      const n = e.target.files[0].name
      const f = e.target.files[0]
      this.setState({uploading: true, file: f, fileName: n})

    }
    onChange = async () => {
        const file = this.state.file
        const fileName = uuid()

        this.setState({uploading: true})

        console.log(file)
        console.log("PROPS")
        console.log(this.props.metaData)
        const c = this.props.metaData
        // Upload file to s3
        const result = await Storage.put(
            fileName, 
            file, 
            {
              customPrefix: { public: "public/uploads/"},
              metadata: {professor: this.props.metaData['professor'],
                          semester: this.props.metaData['semester'],
                          documentName: this.props.metaData['documentName'],
                          fileName: fileName
            }
            }
          );
          console.log('Uploaded file: ', result);
          this.setState({uploading: false});

          // Add filename to list of associated filenames for class
          const data = await API.graphql(graphqlOperation(Queries.getClassDetails(this.props.classID)))
          var exams = data.data.getClass.exams
          exams.push(fileName)
          const res = await API.graphql(graphqlOperation(Queries.updateClass(this.props.classID, exams)))

          // window.location.reload(false);

    }

    render() {
      console.log(this.props.metaData)
        return (
            <div>
              <Form.Group>
              <Form.Button
                onClick={() => document.getElementById('add-image-file-input').click()}
                disabled={this.state.uploading}
                icon='file image outline'
                content={ this.state.uploading ? this.state.fileName : 'Choose Document' }
              />
              <input
                id='add-image-file-input'
                type="file"
                accept='image/*, application/pdf'
                onChange={this.handleChange}
                style={{ display: 'none' }}
              />
            <Form.Button onClick={this.onChange}>Submit</Form.Button>
            </Form.Group> 
            </div>
          );
        }
    }

export default S3ImageUpload;