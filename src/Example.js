import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props) 
        this.program = props.code.split("\n").slice(0, 5)
        this.hover = false;
        this.name = props.name
        console.log(this.program)

        this.onHoverin = this.onHoverin.bind(this)
        this.onHoverout = this.onHoverout.bind(this)
    }
    
    onHoverin() {
        this.hover = true;
    }
    
    onHoverout() {
        this.hover = false;
    }

    render() {
        var div_style;
        if (this.hover) {
            div_style = {border: '10px solid black'}
        } else {
            div_style = {border: '1px solid black'}
        }
        return(
            <div style={div_style} onMouseOver={() => {this.onHoverin()}} onMouseOut={() => {this.onHoverout()}}> 
                <h5 style={{textAlign:'center'}}>{this.name}</h5>
                <div style={{height:'30%', width:'100%'}}>
                    <p style={{ backgroundColor:'#E1E1E1'}}>
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

