import React from 'react';
import ReactDomServer from 'react-dom/server';
import axios from 'axios';
import config from '../config';
import DataApi from '../DataApi'

import App from 'component/App';

// console.log(config)
const ServerRender = async () => {

    const res = await axios.get(`http://${config.host}:${config.port}/data`)
    const api = new DataApi(res.data)
    console.log(api)

    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthores()
    }

    return {
        initialMarkup: ReactDomServer.renderToString(
            <App initialData={initialData} />
        ),
        initialData,
        }
}

export default ServerRender;