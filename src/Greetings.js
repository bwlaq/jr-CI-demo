import React from 'react'

class Greeting extends React.Component {
    constructor() {
        super()
    }

    sayHello(arg = '') {
        alert(`hello ${arg}`)
    }

    render() {
        return <button onClick={() => this.sayHello('987')}>Grettings</button>
    }
}
export default Greeting