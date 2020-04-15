import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import ClassListLoader from './Components/ClassListLoader'
Amplify.configure(aws_exports);






// 4. NEW: Add a new string to query all albums






// 6. EDIT: Change the App component to look nicer and
//    use the AlbumsListLoader component
class App extends React.Component {
  render() {
    return (
      <Grid padded>
        <Grid.Column>
          <ClassListLoader />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});
