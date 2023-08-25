import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { server } from '..';
import ErrorComp from './ErrorComp';
import Loading from './Loading';
import CoinCard from './CoinCard';
import PageChange from './PageChange';


const Coins = () => {
const [coins,setCoins] = useState([]);
const [loading,setLoading] =useState(true);
const [error,setError] =useState(false);
const [currency,setCurrency] =useState("inr");
const [page,setPage] = useState(1);

const currencySymbol = currency==="inr"?"₹" : currency === "eur" ? "€" : "$" ;


useEffect(() => {

  const fetchCoins= async () => {
    
    try {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
       
      setLoading(false);
      
      
    } catch (error) {
      
      setError(true);
      setLoading(false);
    }
    
  
  }

  fetchCoins();
  

}, [currency,page])


if(error){
  return <ErrorComp message="Error Occure during featching coins data" />
}

const handleOptionChanged = (event) => {
  setCurrency(event.target.value);
}



  return (
    <div>
     
      {loading ? <Loading/> 
    : 
    
    (
      
      <div>

      <div className='coins-radio-buttons'>
      <label>
        <input type='radio' name='currency' value={"inr"}  checked={ currency==='inr' ? true: false}  onChange={handleOptionChanged}  />
          INR
      </label>
      <label>
        <input type='radio' name='currency' value={"eur"} onChange={handleOptionChanged}  />
        EUR
      </label>
      <label>
        <input type='radio' name='currency' value={"usd"} onChange={handleOptionChanged} />
        USD
      </label>
    </div>
    
    <div className='cardlist '> 
        {coins.map(i => <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} price= {i.current_price} currencySymbol={currencySymbol} /> )}
       </div>  
      
      </div>
      
   ) }
   <PageChange page={page} setPage={setPage} />
    </div>
  )
}

export default Coins