import courses from '../data/courses';

let rootReducer = function(currentState = courses, action){
    console.log(action);
    console.log(`The current state of the application is` );
    console.log(currentState);
    return currentState;
}

export default rootReducer;

