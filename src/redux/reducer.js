import courses from '../data/courses';

let rootReducer = function(currentState = courses, action){
    console.log(`Action is ${action}`)
    console.log(`The current state of the application is ${currentState}`);
    return currentState;
}

export default rootReducer;

