import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/keanlim8" className="navbar-brand">Guest Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;