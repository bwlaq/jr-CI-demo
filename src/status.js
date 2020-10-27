import React from 'react';
//option 1
//function Status(props) {
//    return <h1>{props.isOnline ? "Online" : "Offline"}
//}

//option 2

//option 3
const Status = ({ isOnline }) => {
    return <>
        {isOnline && <h1>Online</h1>}
        {!isOnline && <h1>Offline</h1>}
    </>
}

export default Status;
