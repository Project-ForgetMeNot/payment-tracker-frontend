import React from 'react';
import './index.css';
import './App.css';

class Header extends React.Component {

    render() {
        return (
            <div id="header-wrapper">
                <div id="header" className="container">
                    <div id="logo">
                    <h1>ForgetMeNot</h1>
                    <span>Bill reminder app</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;