//TO DOs
// 1. seconds ++
// 2. start button
// 3. stop button

import React from 'react'

class StopWatch extends React.Component {
    constructor() {
        super()
        this.state = {
            seconds: 0,
            isRunning: false
        };
        //this.start = this.start.bind(this);
        //this.stop = this.stop.bind(this);
    }
    start=()=> {
        this.setState({
            seconds: 0,
            isRunning: true
        })        
        this.timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1)
        console.log('Started!')
    }

    stop= ()=> {
        this.setState({
            isRunning: false
        })
        clearInterval(this.timer);
        console.log('Stopped!');
    }

    render() {
        const { seconds } = this.state
        return <>
            <h1>{seconds}seconds</h1>
            <button onClick={ this.start}>Start</button>
            <button onClick={ this.stop}>Stop</button>
        </>

    }
}

export default StopWatch;