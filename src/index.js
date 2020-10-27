import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import forHim from './img/for-him.jpg';
import Clock from './Clock';
import Greetings from './Greetings';
import StopWatch from './StopWatch';
import ActionLink from './ActionLink';
import HeroList from './HeroList';
import SignUpForm from './SignUpForm';
import Status from './status';
import Button, { ButtonV2 } from './Button';
import Weather from './Weather';

//ReactDOM.render(
//    <h1>Hello React</h1>,
//  //  <React.StrictMode>
//  //  <App />
//  //</React.StrictMode>,
//  document.getElementById('root')
//);

//ReactDOM.render(
//    <form>
//        <h1>Hello React</h1>
//        <input name="username" type="text" /> 
//        <input name="password" type="password" />
//        <button type="submit">Sign In</button>
//     </form>,
//document.getElementById('root')
//);



//function callBack() {
//    ReactDOM.render(
//        <div>
//            <h1>It is {new Date().toLocaleTimeString()}.        </h1>
//        </div>,
//        document.getElementById('root')
//    );
//}
//setInterval(callBack, 1000);



//Functional component, read-only
function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt="for-him"></img>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
        )

}

ReactDOM.render(
    //<div>
    //    <Clock location='Brisbane' timeZone='Australia/Brisbane' />
    //    <Clock location='Sydney' timeZone='Australia/Sydney' />
    //    <Clock location='Melbourne' timeZone='Australia/Melbourne' />
    //    <Clock location='Adelaide' timeZone='Australia/Adelaide' />
    //    <Clock location='Darwin' timeZone='Australia/Darwin' />
    //    <Clock location='Perth' timeZone='Australia/Perth'/>


    //</div>
    //<Greetings />
    //<StopWatch />
    //<ActionLink/>
    //<HeroList/>
    //<div>
    //    <Button buttonType='primary' label='button1' />
    //    <Button buttonType='primary' label={<h1>button2</h1>} />
    //    <ButtonV2 buttonType='primary'>
    //        <h1>button3</h1>
    //    </ButtonV2>

    //</div>
    <Weather/>
    , document.getElementById('root'));

//<Clock />
//    <h1>Editor's Picks</h1>
//    <Card src={forHim} title="Gifts for Him" subTitle="For Valentine's Day" />




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
