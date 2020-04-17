import React from 'react'
import { Connect } from 'aws-amplify-react';
import { graphqlOperation }  from 'aws-amplify';
import * as Queries from '../Queries'
import ClassTable from './ClassTable'
import _ from 'lodash'
import { Dropdown} from 'semantic-ui-react'



const source = [
    'BUFN', 'GREK', 'MUSC', 'MUSP', 'HESP', 'EPIB', 'ARTH', 'CPSD', 'HEIP', 'ENCE', 'COMM', 'KNES', 'BSOS', 'CPMS', 'CBMG', 'LASC', 'HLTH', 'LING', 'NEUR', 'MOCB', 'PLCY', 'BIOL', 'CHBE', 'CPSN', 'NFSC', 'SOCY', 'SPAN', 'EDHD', 'IMMR', 'JOUR', 'BIOE', 'AOSC', 'EDUC', 'ENSP', 'ENTS', 'INFM', 'MEES', 'THET', 'USLT', 'MATH', 'ECON', 'CHPH', 'BSCI', 'BIOM', 'ENTM', 'AREC', 'BISI', 'ENSE', 'GERM', 'PHSC', 'VMSC', 'NAVY', 'URSP', 'ARAB', 'ENFP', 'ANTH', 'GEOL', 'CPSA', 'ENCO', 'CPGH', 'HESI', 'ENCH', 'CLFS', 'ITAL', 'ASTR', 'BEES', 'UNIV', 'LGBT', 'CPSG', 'FGSM', 'PEER', 'CCJS', 'PORT', 'ARMY', 'RELS', 'BUMK', 'AMST', 'HLMN', 'MUED', 'HHUM', 'EDCP', 'EDSP', 'SLLC', 'HONR', 'FMSC', 'BSGC', 'MLAW', 'ANSC', 'GEMS', 'NACS', 'FIRE', 'HDCC', 'STAT', 'LARC', 'TLPL', 'BMGT', 'AGNR', 'AAST', 'BUSM', 'NIAS', 'BUSO', 'ENME', 'TLTC', 'MLSC', 'ARSC', 'ENGL', 'ARCH', 'CPPL', 'PHPE', 'CHEM', 'SPHL', 'EALL', 'PLSC', 'CLAS', 'BUDT', 'FILM', 'AMSC', 'BSST', 'BUAC', 'ENES', 'BCHM', 'JWST', 'EDMS', 'EDHI', 'IDEA', 'FREN', 'WMST', 'CHIN', 'ENST', 'CPJT', 'RDEV', 'AASP', 'ENRE', 'LATN', 'INST', 'ENAE', 'PSYC', 'SURV', 'BSCV', 'CPBE', 'UMEI', 'TDPS', 'ENEE', 'ISRL', 'LBSC', 'JAPN', 'GVPT', 'KORA', 'ENPM', 'HIST', 'MITH', 'GEOG', 'CMSC', 'BUSI', 'CPSS', 'CPSF', 'HLSA', 'HEBR', 'ARTT', 'MIEH', 'HISP', 'INAG', 'HLSC', 'SLAA', 'CPSP', 'ENMA', 'PHYS', 'HACS', 'BIPH', 'PHIL', 'DANC', 'RUSS', 'CMLT', 'ARHU', 'CPET', 'PERS', 'BULM'
  ]
  const blah = _.map(source.sort(), (dept) => ({
    key: dept,
    text: dept,
    value:dept,
  }))
class ClassTableLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          value: 'CMSC' };
    
       }

    getVal = (event, {value}) => {
        this.setState({value});
      }


    render() {
      return (
          <div>
        <Dropdown
        placeholder='Select Department'
        fluid
        search
        selection
        options={blah}
        onChange={this.getVal}
      />  
      <Connect query={graphqlOperation(Queries.getClasses(this.state.value))}>
          {({ data, loading, errors }) => {
            if (loading) { return <div>Loading...</div>; }
            // if (!data.listClasses) return;
            return <ClassTable classes={data.listClasss.items}/>;
          }}
        </Connect>
        </div>
      );
    }
  }

  export default ClassTableLoader;