class StateApi{
    constructor(rawData){
        this.data={
            articles:this.mapArraytoObject(rawData.articles),
            authors:this.mapArraytoObject(rawData.authors)
        }
    }

    mapArraytoObject=arr=>{
       return arr.reduce((acc,curr)=>{
            acc[curr.id]=curr;
            return acc;
        },{})

    }
    getArticles=()=>{
        return this.mapArraytoObject(this.rawData.articles)
       
    }
    getAuthores=()=>{
        return this.mapArraytoObject(this.rawData.authors)
    }
    lookUpAuthor =(authorId)=>{
        return this.data.authors[authorId] 
    }
    getState=()=>this.data
}



export default StateApi;