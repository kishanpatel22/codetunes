import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class SourceCode extends Component {
    constructor(props) {
        super(props)
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
                            <Button variant="outline-info" size="lg">Examples</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SourceCode;
