import React, { Component } from 'react';

import Piano from './Piano.js'
import Guitar from './Guitar.js'

class Play extends Component {
    constructor(props) {
        super(props)

        /* the max display line */
        this.max_display_lines = 10

        /* max tune index to be displayed on the screen */
        this.max_tune_index = 4
        
        this.padded_lines = this.max_display_lines - this.max_tune_index + 1;

        /* source code lines */
        var source_code_lines = props.code.split("\n")
            
        /* exact source code lines */
        this.num_code_lines = source_code_lines.length;
        
        /* the source code tune number related to the tabs */
        var source_code_tunes = source_code_lines.map(this.count_tabs)
        
        /* adding padding lines */
        for(var i = 0; i < this.padded_lines; i++) {
            source_code_lines.push("");
        }  
        
        /* the actual state for the class */
        this.state = { lines : source_code_lines, tunes : source_code_tunes }

        /* select the instrument for playing */
        this.instrument = new Piano()
        
        /* the line at which the current tune is to be generated */
        this.tune_line = 0
        
        /* the line to be colored */
        this.color_line = 0

        /* id */
        this.event_id = undefined

        /* these are the functions */
        this.count_tabs = this.count_tabs.bind(this)
        
        /* time after which the play instrutment beats */
        this.time = 500
        this.instrument.play(1)
    }
    
    componentDidMount() {
        this.event_id = setInterval(() => {
            this.instrument.play(this.state.tunes[this.tune_line])
            this.tune_line += 1
            this.color_line += 1
            if(this.tune_line > this.max_tune_index) {
                this.color_line = this.max_tune_index
                this.setState({ lines : this.state.lines.slice(1) })
            } else {
                this.setState({lines : this.state.lines })
            }
            if(this.tune_line === this.num_code_lines) {
                clearInterval(this.event_id)
            }
        }, this.time);
    }

    componentWillUnmount() {
        clearInterval(this.event_id) 
    }
    
    count_tabs(text) {
        var count = 0;
        var index = 0;
        while (text.charAt(index) === "\t" || text.charAt(index) === " ") {
            count++;
            index++;
        }
        return count;
    }

    render() {
        return(
            <div style={{backgroundColor: 'white', height : "100%", width: '100%', borderRadius: '2%'}} >
                {
                    this.state.lines.map((line, i) => {
                        if(i <= this.max_display_lines) {
                            if(i == this.color_line) {
                                return (
                                    <pre style={{fontSize : '18px', backgroundColor: '#0067D4', color:'white'}}> {line} </pre>
                                )
                            } else {
                                return (
                                    <pre style={{fontSize : '17px'}}> {line} </pre>
                                )
                            }
                        }
                    })
                }
            </div>
        )
    }
}

export default Play
