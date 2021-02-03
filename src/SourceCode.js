import React, { Component } from 'react';
import Example from './Example.js'
import Program from './Program.js'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Piano from './Piano.js'
import Gitar from './Gitar.js'

class SourceCode extends Component {
    constructor(props) {
        super(props)
		this.state = {
			show: false,
		}
        this.piano = Piano;
        this.gitar = Gitar;

		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
    }

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div style={{ paddingLeft: '5%', paddingTop: '100%'}}>
                            <Button variant="outline-info" size="lg"> Play the Tune </Button>
                        </div>
                    </Col>
                
                    <Col xs={7}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <p style={{ color: 'white', fontSize: '20px', textAlign: 'center'}}> 
                                    Gernerate your source code tunes !
                                </p>
                                <Form.Control placeHolder="{ Write Source Code }" as="textarea" rows="19" name="address"/>
                            </Form.Group>
                        </Form>
                    </Col>
                
                    <Col>
                        <div style={{ paddingLeft: '25%', paddingTop: '100%'}}>
                            <Button variant="outline-info" size="lg" onClick={this.handleShow}>
					            Examples 
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
					<Modal.Header closeButton>
				    	<Modal.Title>
                                Few examples source codes !
                            </Modal.Title>
					    </Modal.Header>
					    <Modal.Body>
                            <Example name="NodeJS Server" code={Program['nodejs']}/>  
                        </Modal.Body>
					    <Modal.Footer>
                            <div style={{margin:'auto'}}>
					            <Button variant="secondary" onClick={this.handleClose}>
					                Close
                                </Button>
                            </div>
					    </Modal.Footer>
				    </Modal>
            </Container>
        )
    }
}

export default SourceCode;
