import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Grid } from 'semantic-ui-react';
import ClassTableLoader from './Components/ClassTableLoader'
import Auth from '@aws-amplify/auth';
import style from '@aws-amplify/ui/dist/style.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import ClassDetailsLoader from './Components/ClassDetailsLoader';

Auth.configure();
Amplify.configure(aws_exports);



class App extends React.Component {
  render() {
    return (
      <Router>
      <Grid padded>
        <Grid.Column>
          <Route path='/' exact component={ClassTableLoader}/>
          <Route 
            path='/class/:classID'
            render={ () => <div><NavLink to="/">Back to Class List</NavLink></div>}
            />
          <Route 
            path='/class/:classID'
            render={props => <ClassDetailsLoader id={props.match.params.classID}/>}
          />
        </Grid.Column>
      </Grid>
      </Router>
    );
  }
}

export default withAuthenticator(App, {includeGreetings:true});
