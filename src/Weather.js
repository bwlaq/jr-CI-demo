import React from 'react';
import Axios from 'axios';

const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
const city = 'Sydney';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

class Weather extends React.Component {
    constructor() {
        super()
        this.state = {
            sunrise: '',
            isLoading: true,
        }
    }


    async componentDidMount() {
        //do ajax call
        const { data: { city: { sunrise } } } = await Axios.get(api);
        this.setState({
            sunrise,
            isLoading: false,
        })
    }

    render() {
        return <>
            <h1>Sydney</h1>
            {this.state.isLoading && <h1> Loading sunrise time...</h1>}
            {!this.state.isLoading && <h2> Sunrise: {this.state.sunrise}</h2>}
        </>
    }
}

export default Weather;