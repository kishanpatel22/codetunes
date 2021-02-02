import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props) 
        this.program = props.code.split("\n").slice(0, 5)
        this.name = props.name
        console.log(this.program)
        console.log(this.name)
    }
    render() {
        return(
            <div> 
                <h5 style={{margin:'auto'}}>{this.name}</h5>
                <hr/>
            </div>
        )
    }
}

export default Example;

