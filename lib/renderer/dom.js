import React, { Component } from 'react'
import ReactDom from 'react-dom';
import App from 'component/App';
import DataApi from '../state-api'

// const initialData={
//     articles:{},
//     authors:{},
// }
const store = new DataApi(window.initialData)

if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)
  }

ReactDom.hydrate(
    <App store={store}/>,
    document.getElementById('root')
)