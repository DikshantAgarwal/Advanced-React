import React from 'react';


const Article = ({article,actions})=>{
    // console.log("Hi",article)

    const style={
        article:{
            paddingBottom:10,

        },
        title:{
            fontWeight:'bold'
        },
        date:{
            fontSize:'0.85em',
            color:'#888'
        },
        author:{
            paddingTop:'10',
            paddingBottom:'10'
        },
        body:{
            paddingLeft:'20'
        }
    }

    const dateDisplay=(dateString)=>new Date(dateString).toDateString();
    const author = actions.lookUpAuthor(article.authorId)
    return(
        <div style={style.article}>
                <div style={style.title}>{article.title}</div>
                <div style={style.date}>{dateDisplay(article.date)}</div>
                <div style={style.author}>
                    <a href={author.website}>
                        {author.firstName}{author.lastName}        
                    </a>
                </div>
                <div style={style.body}>{article.body}</div>
   
        </div>
    )
}

export default Article;