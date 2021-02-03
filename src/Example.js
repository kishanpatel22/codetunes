import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props) 
        this.program = props.code.split("\n").slice(0, 5)
        this.name = props.name
    }
    render() {
        return(
            <div style={{border: '3px solid black'}}>
                <h5>{this.name}</h5>
                <div>
                    <p style={{ textAlign: 'left', backgroundColor:'#BEBEBE'}}>
                    {
                        this.program.map((line) => 
                            <pre style={{fontSize : '15px'}}>{line}</pre>
                        )
                    }
                    </p>
                </div>
            </div>
        )
    }
}

export default Example;

