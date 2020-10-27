import React,  { Component } from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
        console.log('Lifecycle 1: constructor')
    }

    render() {
        const { time } = this.state;
        const options = { timeZone: this.props.timeZone }
        const { location } = this.props;
        console.log('Lifecycle 2: render')
        return (
            <>
                <h2>Current Time in {location} : {time.toLocaleTimeString('en-AU', options )}.</h2>
            </>
        );
    }

    componentDidMount() {
        this.updateTime();
        console.log('Lifecycle 3: componentDidMount')
    }

    componentWillUnmount() {
        console.log('Lifecycle 4: componentWillUnmount')
    }

    updateTime() {
        setInterval(() => {
            //this.state = {} // Incorrect
            this.setState({
                time: new Date()
            })
        },1000)
    }
}

export default Clock;