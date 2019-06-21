import React from 'react';

class Courses extends React.Component {
   
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props);
        return (
            <div>
                {
                    this.props.data.length > 0 ? (
                        <ul>
                        {
                            this.props.data.map(course => <li style={{listStyle:'none', padding:'20px', fontSize:'24px',backgroundColor:'tomato', color:'#ffffff', margin:'10px', width:'40%'}} id={course.id}
                                    key={course.id} 
                                    onClick={(event)=> this.props.handleClick(event)}>{course.name}</li>)
                        }
                        </ul>
                    ): <h1> There are no Courses for Display </h1>
                }
            </div>  
        );
    }
}

export default Courses;