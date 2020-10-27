import React from 'react';
import { render } from 'react-dom';

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {
            list: ['1', '2', '3']
        }
    }

    render() {
        return <ul>
            {JSON.stringify(this.state.list)}
            {this.state.list.map(item => <li key={item}>{item}</li>)}
        </ul>
    }
}
export default HeroList;