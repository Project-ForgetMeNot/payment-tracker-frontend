import React from 'react';


class AddNewBill extends React.Component {
    render() {
        return (
        <div className="AddForm">
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input 
              type="email" 
              className="form-control" 
              placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Bill Type</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Car Insurance</option>
                <option>Buildings and Contents Insurance</option>
                <option>Gas and Electric</option>
                <option>MOT</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name of Bill Provider</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Type company here"
              />
            </div>
            <div className="col-12 col-md-2 mb-2">
                        <button className="btn btn-primary btn-block">
                            Add
                        </button>
                </div>
        </div>
        )
    }
}
export default AddNewBill;    