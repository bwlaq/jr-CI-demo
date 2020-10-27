import React from 'react'

class SignUpForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    //handleChangeUsername = (event) => {
    //    console.log(event.target.value)
    //    this.setState({
    //        username: event.target.value
    //    })
    //}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const { username, password } = this.state;
        { JSON.stringify(this.state) }
        return <>
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange} />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit" onClick={this.handleSubmit}> Sign Up </button>
            </form>
        </>
    }
}

export default SignUpForm;