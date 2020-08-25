class DataApi{
    constructor(rawData){
        this.rawData=rawData
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
}

const api= new DataApi({articles:[{id:1},{id:2},{id:3}],authors:[3,4,5,6]})

export default DataApi;