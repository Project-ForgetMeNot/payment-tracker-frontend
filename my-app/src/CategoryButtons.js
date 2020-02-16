import React from 'react';
import './index.css';
import './App.css';

class CategoryButtons extends React.Component {

    render() {
        return (
            <div id="buttons" className="container">
                <div className="row">
                    <div className="col text-center">
                    <button className="btn btn-info btn-circle btn-sm m-1" title="car"><i className="fas fa-car"></i></button>
                    <button className="btn btn-info btn-circle m-1" title="house"><i className="fas fa-home"></i></button>
                    <button className="btn btn-info btn-circle m-1" title="insurance"><i className="fas fa-car-crash"></i></button>
                    <button className="btn btn-info btn-circle m-1" title="phone"><i className="fas fa-phone"></i></button>
                    <button className="btn btn-info btn-circle m-1" title="broadband"><i className="fas fa-wifi"></i></button>
                    <button className="btn btn-info btn-circle m-1" title="other"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryButtons;
