class StateApi{
    constructor(rawData){
        this.data={
            articles:this.mapArraytoObject(rawData.articles),
            authors:this.mapArraytoObject(rawData.authors),
            searchTerm:'',
            timestamp:new Date()
        };
        this.subscriptions=[];
        this.lastSubscriptionId=0
      
    }

    mapArraytoObject=arr=>{
       return arr.reduce((acc,curr)=>{
            acc[curr.id]=curr;
            return acc;
        },{})

    }
    lookUpAuthor =(authorId)=>{
        return this.data.authors[authorId] 
    }
    getState=()=>this.data

    subscribe=(cb)=>{
        this.lastSubscriptionId++
        this.subscriptions[this.lastSubscriptionId]=cb
        return this.lastSubscriptionId

    }
    unsubscribe=(SubscriptionId)=>{
        delete this.subscriptions[SubscriptionId]

    }

    notifySubscribers=()=>{
        Object.values(this.subscriptions).map(cb=>cb())
    }
    mergeWithStore=(stateChange)=>{
        this.data={
            ...this.data,
            ...stateChange
        }
        this.notifySubscribers();
    }
    setSearchItem=(searchTerm)=>{

        this.mergeWithStore({searchTerm})
        
    }

    startClock=()=>{
        setInterval(()=>{
            this.mergeWithStore({
                timestamp:new Date()
            })
        },1000)
    }


}



export default StateApi;