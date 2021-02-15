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
import './Styles.css'

class SourceCode extends Component {
    constructor(props) {
        super(props)
		this.state = {
			show: false,
            programCode: "",
            piano : true,
            play : false
		}
        
		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
        this.updateInputBox = this.updateInputBox.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.play = this.play.bind(this)
        this.stop = this.stop.bind(this)
        this.selectPiano = this.selectPiano.bind(this)
        this.selectGuitar = this.selectGuitar.bind(this)
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
        
    selectPiano() {
        this.setState({ piano: true });
    }
    
    selectGuitar() {
        this.setState({ piano: false });
    }

    render() {
        var program_input = <Form.Control placeHolder="{ Write Source Code }" defaultValue={this.state.programCode}
                                          onChange = {this.onChangeText} size="lg" 
                                          as="textarea" rows="14" name="program"/>
        if(this.state.play) {
            var instru = 'guitar'
            if(this.state.piano) {
                instru = 'piano'
            }
            program_input = <Play code={this.state.programCode} instrument={instru}/>
        }
        
        var piano_style = "outline-primary"
        var guitar_style = "outline-primary"
        if(this.state.piano) {
            piano_style = "primary" 
        } else {
            guitar_style = "primary" 
        }

        return (
            <div className="flex-container" style={{display: 'flex'}}>
                <div>
                    <div className="code-content1">
                        <Button variant={piano_style} onClick={this.selectPiano} size="lg" > Piano </Button>
                        <Button variant={guitar_style} onClick={this.selectGuitar} size="lg" > Guitar </Button>
                    </div>
                </div>
                <div>
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
                </div>
                <div>
                    <Button variant="outline-info" size="lg" onClick={this.handleShow}>
					    Examples 
                    </Button>
                </div>

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
            </div>
        )
    }
}

export default SourceCode;
