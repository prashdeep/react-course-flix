import React from 'react';

class AddCourse extends React.Component {

    render(){
        return (
            <div className="row">
                <div className="col-md-6">
                <form>
                        <div className="form-group">
                            <label >Course Name</label>
                            <input type="text" className="form-control" id="courseName" aria-describedby="courseName" placeholder="Enter Course Name"/>
                        </div>
                        <div className="form-group">
                            <label >Course Price </label>
                            <input type="text" class="form-control" id="price" placeholder="Price"/>
                        </div>
                        <div className="form-group">
                            <label >Course Duration </label>
                            <input type="text" class="form-control" id="duration" placeholder="Price"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form> 
                </div>
            </div>
        );
    }
}

export default AddCourse
