import React from 'react';

function ArticleCard(){
    return(
        <div className='ArticleCardWrapper'>
            <div className='ArticleCardImage'>
                <img src='./' alt='boilerplate image'/>
            </div>
            <div className='ArticleCardText'>
                <h2 className='ArticleCardTitle'>Article Title</h2>
                <p className='ArticleCardDate'>Date</p>
                <p className='ArticleCardBlurb'>Blurb</p>
                <p className='ArticleCardLink'>
                    <a href='#'>Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;