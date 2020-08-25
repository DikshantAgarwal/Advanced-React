import React,{Component} from 'react';
import ArticleList from './ArticleList';
import 'regenerator-runtime/runtime';


class App extends Component{

        state=this.props.store.getState();

    // async componentDidMount(){
    //     const res = await axios.get('/data')
    //     const api = new DataApi(res.data)

    //     this.setState(()=>({
    //         articles:api.getArticles(),
    //         authors:api.getAuthores()
    //     })
    //     )
    // }
    // articleActions={
    //    lookUpAuthor:authorId=>this.state.authors[authorId] 
    // }

    render(){
        // debugger;
        return(
           <ArticleList
                articles={this.state.articles}
                store={this.props.store}
           />
        );
    }
}

export default App;
