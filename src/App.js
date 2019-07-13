import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavigationBar/TopNavBar';
import SideNavBar from './components/SideNavigationBar/SideNavBar';
import { Row, Col } from 'reactstrap';
import NoteEditer from './components/NoteEditer/NoteEditer';

function App() {
  return (
    <Row className="App-Header">
      <Col>
        <Row>          
          <Col md="12">
            <TopNavBar />
          </Col>
        </Row>
        <Row>
          <Col md="1">
            <SideNavBar />
          </Col>
          <Col md="10">
            <NoteEditer />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}


export default App;
