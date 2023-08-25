import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import NewsCard from './NewsCard';
import ErrorComp from './ErrorComp';
import "./NewsCard.css";

const News = () => {
const [newsData,setNewsData] =useState([]);
const [loading,setLoading] =useState(true);
const [error,setError] =useState(false);
const [page,setPage] = useState(1);

    useEffect(() => {
      const fetchdata =async () => {
       
        const options = {
          method: 'GET',
          url: 'https://crypto-news16.p.rapidapi.com/news/top/50',
          headers: {
            'X-RapidAPI-Key': 'c7d474a3abmshf1c72b4157563a5p171458jsn11a1c0decfde',
            'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
          }
        };

        
        try {
            const response = await axios.request(options);
           

            setNewsData(response.data);
            
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }


      }
    
     fetchdata();
    }, [])

    if(error){
        return <ErrorComp message="Sorry the News Api is down Currently" />
      }
    
      

  return (
    <div>
        {
            loading ? <Loading/>
            :
            <div className='newscard' >

               {newsData.map((i,index) => <NewsCard  key={index}  createdAt={i.createdAt} description={i.description} thumbnail={i.thumbnail} title={i.title} url={i.url} />)}
            </div>
        }
    </div>
  )
}

export default News