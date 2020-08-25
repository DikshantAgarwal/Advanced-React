import React from 'react';
import ReactDomServer from 'react-dom/server';
import axios from 'axios';
import config from '../config';
import StateApi from '../state-api'

import App from 'component/App';

// console.log(config)
const ServerRender = async () => {

    const res = await axios.get(`http://${config.host}:${config.port}/data`)
    const store = new StateApi(res.data)
    // console.log(api)

    // const initialData = {
    //     articles: api.getArticles(),
    //     authors: api.getAuthores()
    // }

    return {
        initialMarkup: ReactDomServer.renderToString(
            <App store={store} />
        ),
        initialData:res.data
        }
}

export default ServerRender;