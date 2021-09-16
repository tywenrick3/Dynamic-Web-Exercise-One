import React from 'react'
import ArticleCard from "../components/ArticleCard";

function ArticleListing(){
    const articlesTitle = 'Articles'
    return (
        <div className='PageWrapper'>
            <h1 className='HeaderOneStyle'>{articlesTitle}</h1>
            <ArticleCard/>
        </div>
    )
}

export default ArticleListing;