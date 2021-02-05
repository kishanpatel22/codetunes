import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Example from './Example.js'
import Program from './Program.js'
import Play from './Play.js'

class SourceCode extends Component {
    constructor(props) {
        super(props)
		this.state = {
			show: false,
            programCode: "",
            piano : false,
            play : false
		}
        
		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
        this.updateInputBox = this.updateInputBox.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.play = this.play.bind(this)
        this.stop = this.stop.bind(this)
    }

	handleClose() {
		this.setState({ show: false })
	}

	handleShow() {
		this.setState({ show: true })
	}
    
    updateInputBox(programName) {
		this.setState({ show: false })
        this.setState({ programCode: Program[programName] })
        console.log(this.state.programCode)
    }
    
    onChangeText(event) {
        this.setState({programCode : event.target.value});
    }
    
    play() {
        this.setState({ play : true });
    }
    
    stop() {
        this.setState({ play : false });
    }

    render() {
        var program_input = <Form.Control placeHolder="{ Write Source Code }" defaultValue={this.state.programCode}
                                          onChange = {this.onChangeText} size="lg" 
                                          as="textarea" rows="14" name="program"/>
        if(this.state.play) {
            program_input = <Play code={this.state.programCode} />
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <div style={{ paddingTop: '75%'}}>
                            <div>
                                <Button variant="outline-primary" size="lg" > Piano </Button>
                                <br/><br/>
                                <Button variant="outline-primary" size="lg" > Gitar </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <p style={{ marginTop: '1%', color: 'white', fontSize: '20px', textAlign: 'center'}}> 
                                    <Button variant="outline-info" size="lg" onClick={this.play} > Play </Button>
                                    <Button style={{ marginLeft:'5%'}} variant="outline-dark" 
                                                     onClick={this.stop} size="lg"> Stop </Button>
                                    <span style={{marginLeft:'5%'}}>
                                        Gernerate your source code tunes !
                                    </span>
                                </p>
                                {program_input}    
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
                        <Button variant="light" size="lg" block  onClick={() => this.updateInputBox('nodejs')} >
                            <Example name="NodeJS Server" code={Program['nodejs']}/>
                        </Button>
                        <br/>
                        <Button variant="light" size="lg" block  onClick={() => this.updateInputBox('React')} >
                            <Example name="React" code={Program['React']}/> 
                        </Button>
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
