import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './SideNavBar.css';

class SideNavBar extends Component {
    render() { 
        return ( 
            <Row className="sideNav">
                <Col md="12" className='item'>
                    <i className="fa fa-file fa-lg"></i>
                </Col>
                <Col md="12" className='item'>
                    <i className="fa fa-archive fa-lg"></i>
                </Col>
                <Col md="12" className='item'>
                    <i className="fa fa-cog fa-lg"></i>
                </Col>
            </Row> 
        );
    }
}
 
export default SideNavBar;