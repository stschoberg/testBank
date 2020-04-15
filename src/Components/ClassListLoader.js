import React from 'react'
import ClassList from './ClassList'
import { Connect } from 'aws-amplify-react';
import { graphqlOperation }  from 'aws-amplify';
import * as Queries from '../Queries'

class ClassListLoader extends React.Component {
    render() {
        console.log("LOADING")
      return (
        <Connect query={graphqlOperation(Queries.ListClasses)}>
          {({ data, loading, errors }) => {
            if (loading) { return <div>Loading...</div>; }
            console.log(data)
            // if (!data.listClasses) return;
            return <ClassList classes={data.listClasss.items} />;
          }}
        </Connect>
      );
    }
  }

  export default ClassListLoader;