import React, { Component } from 'react'
import ReactDom from 'react-dom';
import App from 'component/App';

// const initialData={
//     articles:{},
//     authors:{},
// }
 

ReactDom.render(
    <App initialData={window.initialData}/>,
    document.getElementById('root')
)