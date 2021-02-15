import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Styles.css'

class CodeTunes extends Component {
    constructor(props) {
        super(props)
        this.state = { show : false}

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
	handleClose() {
		this.setState({ show: false })
	}

	handleShow() {
		this.setState({ show: true })
	}

    render() {
        return (
            <div className="flex-container" style={{ backgroundColor : '#0067D4', borderRadius: '60px', display:'flex'}}>  
                <div className="flex-content1">
                    <p style={{ color : 'white' }}> 
                        Hear <strong style={{ color: '#000F23'}}>music</strong> of any  
                             <strong style={{ color: '#000F23'}}> program source code</strong> 
                        <br/>
                        Let code generate <strong style={{ color: '#000F23'}}> musics </strong>
                        and not <strong style={{ color: '#000F23'}}> bugs </strong> 
                    </p>
                </div>
                <div className="flex-content2">
                    <a target="_blank" href="https://github.com/kishanpatel22/codetunes" 
                       style={{ color: 'white' }}>
                        CodeTunes 
                    </a>
                </div>
                <div className="flex-content3">
                    <div>
                        <Button variant="primary" size="lg" onClick={this.handleShow}>
                            How this app works ?
                        </Button>
                    </div>
                </div>
                
                <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
				    <Modal.Header closeButton>
				    	<Modal.Title>
                            CodeTunes : create music from program source code
                        </Modal.Title>
					</Modal.Header>
					<Modal.Body>
                        <p>
                            CodeTunes works on the indentation of the program source code 
                            for generating the music. More the tabs/spaces in indentation  
                            different will be the music which is generated. CodeTunes
                            makes of Web Audio API to create frequency pitches
                        </p>
                        <p>
                           Currently the Gitar Tunes are provided by fetching an amazon music API for
                           generating the Guitar pitches!
                        </p>
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

export default CodeTunes;
