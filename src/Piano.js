import React, { Component } from 'react';

const AudioContext = window.AudioContext || window.webkitAudioContext
/* Frequency of Pinao keys in Hz */
const FrequencyBindings = [261.6, 392, 440, 523.3, 659.3, 739.99, 
                           830.61, 1046.50, 1479.98, 1760.00, 2093.00, 2793.83, 
                           3520.00, 4978.03, 6271.93]

class Piano extends Component {
    
    constructor(props) {
        super(props)
        this.playSound = false
        this.songID = 0
        this.freqIndex = 0
        this.oscillatorWaveFromType = "sine"
        this.songFrequency = FrequencyBindings
        this.numFreqBands = this.songFrequency.length
        this.beatsPerMilliSecond = 1000 / 4
        this.time = 

        /* audio context manager for the getting oscillators */
        this.ctx = new AudioContext()
        
        this.createOscillator = this.createOscillator.bind(this)
        this.playSong = this.playSong.bind(this)
    }
    
    /* will create sound for the paritcular frequency for some constant time */
    createOscillator(freq, time) {
        let oscillator              = this.ctx.createOscillator()
        let gainNode                = this.ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        oscillator.frequency.value  = freq
        oscillator.type             = this.oscillatorWaveFromType
        
        oscillator.start(time)
        gainNode.gain.exponentialRampToValueAtTime(0.001, time + this.timeChange)
        oscillator.stop(time + this.timeChange)  
    }
    
    playFreq(number) {
        let currFreq = this.songFrequency[number]
        let time = this.ctx.currentTime;
        this.createOscillator(currFreq, time)
    }

    playSong(number) {
        /* logic to map given number to particular frequency */
        this.playFreq(number)
    }
}

export default Piano
