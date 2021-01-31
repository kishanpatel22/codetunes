import React, { Component } from 'react';

const AudioContext = window.AudioContext || window.webkitAudioContext

let sounds = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D%236.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D%236.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D7.mp3'
];

class Buffer {
  
    constructor(context, urls) {  
        this.context = context;
        this.urls = urls;
        this.buffer = [];
        this.done = false;
    }
  
    loadSound(url, index) {
        let request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        let thisBuffer = this;
        request.onload = function() {
            thisBuffer.context.decodeAudioData(request.response, 
                function(buffer) {
                thisBuffer.buffer[index] = buffer;
                if(index === thisBuffer.urls.length-1) {
                    thisBuffer.loaded();
                }       
            });
        };
        request.send();
    }
  
    getBuffer() {
        this.urls.forEach((url, index) => {
        this.loadSound(url, index);
        })
    }
  
    loaded() {
        this.done = true;
    }
  
    getSound(index) {
        return this.buffer[index];
    }

}

class Gitar extends Component {
    constructor(props) {
        super(props)
        /* audio context manager for the getting oscillators */
        this.ctx = new AudioContext()
        /* song buffer helps to get audios from various urls */
        this.songBuffer = new Buffer(this.ctx, sounds)
        this.songBuffer.getBuffer();
        
        /* the time after which the song must be changed */
        this.timeChange = 1

        this.setup = this.setup.bind(this);
        this.playSong = this.playSong.bind(this);
    }

    setup(buffer) {
        this.gainNode = this.ctx.createGain();
        this.source = this.ctx.createBufferSource();
        this.source.buffer = buffer;
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.ctx.destination);
        this.gainNode.gain.setValueAtTime(0.8, this.ctx.currentTime);
    }

    playSong(number) {
        /* some logic to map given number with some tune on gitar */

        let buffer = this.songBuffer.buffer[number]
        this.setup(buffer);
        let time = this.ctx.currentTime
        this.source.start(time);
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + this.timeChange);
        this.source.stop(time + this.timeChange);
    }
}

export default Gitar
