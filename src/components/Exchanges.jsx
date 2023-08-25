import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '..'
import Loading from './Loading';
import ExchangeCard from './ExchangeCard';
import ErrorComp from './ErrorComp';
import Footer from './Footer';

const Exchanges = () => {
    const [exchanges,setExchanges] = useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(false);

    useEffect(() => {

        const fetchExchanges= async() =>{
            try {
                
                const {data} = await axios.get(`${server}/exchanges`);
                setExchanges(data);
           
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }

        fetchExchanges();


    },[]);


    if(error){
        return <ErrorComp message={"Error while featching the data in exchnages"} />
    }



  return (
    <div>
        {loading ? <Loading /> : (
            <div className='cardlist '>
                {exchanges.map(i => <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />)}
                {/* {exchanges.map(i => <img src={i.image} alt='exchange img' />)} */}
             </div>   
        )}

       
        
    </div>
  )
}

export default Exchanges