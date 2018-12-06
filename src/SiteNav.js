import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './Style.css';

class SiteNav extends Component {
    render = () => {
        return (
            <nav className='menu'>
                <Link to={'/'}>Home</Link>
                <Link to={'work-history'}>Work History</Link>
            </nav>
        )
    }
}


export default SiteNav