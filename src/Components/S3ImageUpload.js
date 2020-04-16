import React from 'react'
import {v4 as uuid} from 'uuid';
import { Form } from 'semantic-ui-react';
import { Storage, graphqlOperation, API } from 'aws-amplify';
import * as Queries from '../Queries'

class S3ImageUpload extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            uploading: false
        }
    }

    onChange = async (e) => {
        const file = e.target.files[0]
        const fileName = uuid()

        this.setState({uploading: true})
        // Upload file to s3
        const result = await Storage.put(
            fileName, 
            file, 
            {
              customPrefix: { public: `uploads/`},
              metadata: { classID: this.props.classID }
            }
          );
          console.log('Uploaded file: ', result);
          this.setState({uploading: false});

          // Add filename to list of associated filenames for class
          const data = await API.graphql(graphqlOperation(Queries.getClassDetails(this.props.classID)))
          var exams = data.data.getClass.exams
          exams.push(fileName)
          const res = await API.graphql(graphqlOperation(Queries.updateClass(this.props.classID, exams)))
    }

    render() {
        return (
            <div>
              <Form.Button
                onClick={() => document.getElementById('add-image-file-input').click()}
                disabled={this.state.uploading}
                icon='file image outline'
                content={ this.state.uploading ? 'Uploading...' : 'Add Image' }
              />
              <input
                id='add-image-file-input'
                type="file"
                accept='image/*, application/pdf'
                onChange={this.onChange}
                style={{ display: 'none' }}
              />
            </div>
          );
        }
    }

export default S3ImageUpload;