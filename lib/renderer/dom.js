import React, { Component } from 'react'
import ReactDom from 'react-dom';
import App from 'component/App';
import DataApi from '../state-api'

// const initialData={
//     articles:{},
//     authors:{},
// }
const store = new DataApi(window.initialData)

ReactDom.render(
    <App store={store}/>,
    document.getElementById('root')
)