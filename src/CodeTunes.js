import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class CodeTunes extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.state = {visible : false}
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div style={{ backgroundColor : '#0067D4', borderRadius: '60px'}}>  
                <div style={{ display:'inline-block', paddingLeft: '5%'}}>
                    <p style={{ color : 'white', fontSize: '18px'}}> 
                        Hear <strong style={{ color: '#000F23'}}>music</strong> of any  
                             <strong style={{ color: '#000F23'}}> program source code</strong> 
                        <br/>
                        Lets your code be <strong style={{ color: '#000F23'}}> melodious </strong>
                        and <strong style={{ color: '#000F23'}}> healing </strong> 
                    </p>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <a target="_blank" href="https://github.com/kishanpatel22/codetunes" 
                       style={{ marginLeft:'5%', color: 'white', fontSize: '70px', display:'inline-block'}}>
                        CodeTunes 
                    </a>
                </div>
                <div style={{ display: 'inline-block', paddingLeft: '10%'}}>
                    <a style={{ color: 'white', fontSize: '20px'}} href="/demo" onClick={() => this.openModal()} >
                        How this app works ?
                    </a>
                    <br/>
                    <br/>
                </div>
            </div>             
        )
    }
}

export default CodeTunes;
