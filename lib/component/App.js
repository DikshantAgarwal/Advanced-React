import React,{Component} from 'react';
import DataApi from '../DataApi';
import axios from 'axios';
import ArticleList from './ArticleList';
import 'regenerator-runtime/runtime';


class App extends Component{

        state={
            articles:this.props.initialData.articles,
            authors:this.props.initialData.authors
        }

    // async componentDidMount(){
    //     const res = await axios.get('/data')
    //     const api = new DataApi(res.data)

    //     this.setState(()=>({
    //         articles:api.getArticles(),
    //         authors:api.getAuthores()
    //     })
    //     )
    // }
    articleActions={
       lookUpAuthor:authorId=>this.state.authors[authorId] 
    }

    render(){
        // debugger;
        return(
           <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
           />
        );
    }
}

export default App;
