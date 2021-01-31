import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class SourceCode extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div style={{ display : 'inline-block', paddingLeft:'10%'}}>
                    <button> Play </button>
                </div>
                <div style={{ display : 'inline-block', width:'700px', marginLeft:'10%'}}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <p style={{ color: 'white', fontSize: '20px', textAlign: 'center'}}> 
                                Gernerate your source code tunes !
                            </p>
                            <Form.Control placeHolder="{ Write Source Code }" as="textarea" rows="15" name="address"/>
                        </Form.Group>
                    </Form>
                </div>
                <div style={{ display : 'inline-block' }}>
                    
                </div>
            </div>
        )
    }
}

export default SourceCode;
