import React, { PureComponent } from 'react';
import ArticleList from './ArticleList';
import 'regenerator-runtime/runtime';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';
import Timestamp from './timestamp';


class App extends PureComponent {

   
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {
            store: this.props.store
        }
    }
    appState=()=>{
        const {articles,searchTerm}= this.props.store.getState();
        return {articles,searchTerm}
    }
    state = this.appState();
    onStoreChange = ()=>{
        this.setState(this.appState())
    }
    componentDidMount(){
        this.subscriberId = this.props.store.subscribe(this.onStoreChange)
        this.props.store.startClock();
    }
   
    componentWillUnmount(){
        this.props.store.unsubscribe(this.subscriberId)
    }
  
    render() {
        // debugger;
        let {articles,searchTerm}= this.state;
        const searchRe= new RegExp(searchTerm,'i')      
        if(searchTerm){
            articles=pickby(articles,(value)=>{
                return value.title.match(searchRe)|| value.body.match(searchRe)

            })
        }
        return (
            
            <div>
                <Timestamp />
                <SearchBar />
                <ArticleList articles={articles} />
            </div>

        );
    }
}

export default App;
