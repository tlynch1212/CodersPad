import React from "react";
import './App.css';
import TopNavBar from './components/TopNavigationBar/TopNavBar';
import SideNavBar from './components/SideNavigationBar/SideNavBar';
import { Row, Col } from 'reactstrap';
import NoteEditor from './components/NoteEditor/NoteEditor';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: true
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}
	render() {
		return (
			<Row className="App-Header">
				<Col md="10">
					<Row>
						<Col>
							<TopNavBar />
						</Col>
					</Row>
					<Row className="bodyForm">
						<Col md="1">
							<SideNavBar />
						</Col>
						<Col md="11">
							<NoteEditor />
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}


export default App;
