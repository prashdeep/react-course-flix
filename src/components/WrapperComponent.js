import {connect} from 'react-redux';
import Courses from './Courses';

function mapStateToProps(state){
    return {
      courses:state
    }
  }
  
  export const WrapperComponent = connect(mapStateToProps)(Courses)