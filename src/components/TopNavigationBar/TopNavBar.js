import React from 'react';
import { Row, Col } from 'reactstrap';
import './TopNavBar.css';

let TopNavBar = () => {
    return (
        <Row className="topNav">
            <Col>
                Write some cool notes!
            </Col>
        </Row>
    );
}

export default TopNavBar;