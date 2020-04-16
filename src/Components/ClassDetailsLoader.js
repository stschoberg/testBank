import React from 'react'
import * as Queries from '../Queries'
import { Connect } from 'aws-amplify-react';
import { graphqlOperation }  from 'aws-amplify';
import ClassDetails from './ClassDetails';


class ClassDetailsLoader extends React.Component{
    render() {
        return (
            <Connect query={graphqlOperation(Queries.getClassDetails(this.props.id))}>
                {(data, loading, errors) => {
                    if (data.loading) {return (<div>Loading...</div>)}
                    // if (!data.getClassDetails) return
                    return <ClassDetails class={data.data.getClass}/>
                }

                }
            </Connect>
        )
    }
}
export default ClassDetailsLoader;
