import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.Component{
    state={
        searchTerm:'' 
    }

    doSearch=debounce(()=>{
        this.props.store.setSearchItem(this.state.searchTerm)
    },400)

    handleSearch =(event)=>{
        this.setState({searchTerm:event.target.value},()=>{
            this.doSearch();
        })
    }
    render(){
        return(
                <input
                    type="search"
                    placeholder="Enter Search Criteria"
                    value={this.state.searchterm}
                    onChange={this.handleSearch}
                >
                </input>
        )
    }
}

export default storeProvider()(SearchBar);