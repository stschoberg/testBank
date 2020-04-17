import React from 'react'
import { Form } from 'semantic-ui-react';
import { Storage, graphqlOperation, API } from 'aws-amplify';
import * as Queries from '../Queries'

class S3ImageUpload extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            uploading: false,
            fileLoaded: false,
            file: '',
            fileName: ''
        }
    }
    handleChange = (e) => {
      const n = e.target.files[0].name
      const f = e.target.files[0]
      this.setState({fileLoaded: true, file: f, fileName: n})

    }
    onChange = async () => {
        const file = this.state.file
        var fileName = "".concat(this.props.metaData['documentName'], "_", this.props.metaData['semester'], "_", this.props.metaData['professor'])
        fileName = fileName.replace(/.\s/g, '');
        this.setState({uploading: true})
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


          this.setState({uploading: false});

          // Add filename to list of associated filenames for class
          const data = await API.graphql(graphqlOperation(Queries.getClassDetails(this.props.classID)))
          // If no filenames associated with class
          var exams = data.data.getClass.exams ? data.data.getClass.exams : []
          exams.push(fileName)
          await API.graphql(graphqlOperation(Queries.updateClass(this.props.classID, exams)))

          window.location.reload(false);

    }

    render() {
      console.log(this.props.metaData)
        return (
            <div>
              <Form.Group>
              <Form.Button
                onClick={() => document.getElementById('add-image-file-input').click()}
                icon='file image outline'
                content={ this.state.fileLoaded ? this.state.fileName : 'Choose Document' }
              />
              <input
                id='add-image-file-input'
                type="file"
                accept='image/*, application/pdf'
                onChange={this.handleChange}
                style={{ display: 'none' }}
              />
            <Form.Button 
              onClick={this.onChange}
              disabled={this.state.fileName === '' || 
                        this.props.metaData['professor'] === '' ||
                        this.props.metaData['semester'] === '' ||
                        this.props.metaData['documentName' === '']}
              content={this.state.uploading? "Uploading...": "Submit"}/>

            </Form.Group> 
            </div>
          );
        }
    }

export default S3ImageUpload;