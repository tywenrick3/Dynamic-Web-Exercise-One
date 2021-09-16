import React from 'react'
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data.json"
import Article from './Article';

function ArticleListing(){
    const articlesTitle = 'Articles'
    return (
        <div className='PageWrapper'>
            <h1 className='HeaderOneStyle'>{articlesTitle}</h1>
            {Data.map((article, key) => (
                <ArticleCard article={article} key={key} />
            ))}
            
        </div>
    )
}

export default ArticleListing;