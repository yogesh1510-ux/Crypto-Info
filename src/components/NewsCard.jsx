import React from 'react'
import "./NewsCard.css"

const NewsCard = ({createdAt,description,title,url}) => {

  return (
    
    <div className='news-card-view' >
      <a href={url} target='blank' >

        <div className='item'>
        <h3>{title}</h3>
      

        </div>
  
    
    
    <p>{description}</p>

      </a>
    </div>
  )
}

export default NewsCard