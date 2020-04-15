


import React from 'react'
import { Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import * as utils from '../Util' ;

class ClassList extends React.Component {
    classes() {
          return this.props.classes.sort(utils.makeComparator('name')).map(c =>
              <li key={c.id}>
                  {c.name}
              </li>);
      }
  
    render() {
      return (
        <Segment>
          <Header as='h3'>My Classes</Header>
          <List divided relaxed>
            {this.classes()}
          </List>
        </Segment>
      );
    }
  }

  export default ClassList;