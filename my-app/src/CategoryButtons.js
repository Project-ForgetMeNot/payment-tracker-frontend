import React from 'react';
import './index.css';
import './App.css';

class CategoryButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: props.categories
        }
    }
    render() {
        const cats = this.state.categories;
        return (
            <div id="buttons" className="container">
                <div className="row">
                    <div className="col text-center">
                        {cats.map((value, index) => {
                            return <button key={index} className="btn btn-info btn-circle btn-sm m-1" title={value.name}>
                                <i className={value.icon}></i>
                                </button>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryButtons;