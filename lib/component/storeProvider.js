import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider=(extraProps=()=>({}))=>( (Component)=>{

    return class WithStore extends React.PureComponent{
        static displayName = `${Component.name}Container`
        static contextTypes = {
            store:PropTypes.object
        }
        usedState=()=>{
            return extraProps(this.context.store,this.props)
        }
        state=this.usedState();
       
        onStoreChange = ()=>{
            // this.forceUpdate();
            this.setState(this.usedState())
        }
        componentDidMount(){
            this.subscriberId = this.context.store.subscribe(this.onStoreChange)
        }
        componentWillUnmount(){
            this.context.store.unsubscribe(this.subscriberId)
        }
        componentWillUpdate(nextProps,nextState){
            console.log(this.state,nextState)

        }
        render(){
            return <Component {...this.props} {...this.usedState()} store = {this.context.store}/>
        }
    }
})

export default StoreProvider;