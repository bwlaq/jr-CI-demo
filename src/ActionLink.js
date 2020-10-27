import React from 'react';

class ActionLink extends React.Component {
    constructor() {
        super()
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return <form>
            <button type="submit" onClick={this.handleClick}>Click Me</button>
        </form>        
    }
}
export default ActionLink;