import courses from '../data/courses';
import { removeCourse } from './actions';

let rootReducer = function(currentState = courses, action){
    console.log('came inside the root reducer with action ')
    console.log(action);
    switch(action.type){
        case 'REMOVE_COURSE':
                return removeCourseFromArray(action.index, currentState);
        default:
            return currentState        
    }
}

function removeCourseFromArray(index, state){

    return [...state.splice(0, index), ...state.splice(index + 1)];
}

export default rootReducer;

