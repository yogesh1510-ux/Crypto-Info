import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { server } from '..';
import ErrorComp from './ErrorComp';
import Loading from './Loading';
import CoinCard from './CoinCard';
import PageChange from './PageChange';
import { useParams } from 'react-router-dom';
import "./CoinDetails.css";
import Chart from './Chart';


const CoinDetails = () => {
const [coin,setCoin] = useState([]);
const [loading,setLoading] =useState(true);
const [error,setError] =useState(false);
const [currency,setCurrency] =useState("inr");
const [price,setPrice] = useState(0);
const [progressWidth, setProgressWidth] = useState(0);
const [days,setDays] = useState("24h");
const [chartArray,setChartArray] = useState("24h");
const params=useParams();


const currencySymbol = currency==="inr"?"₹" : currency === "eur" ? "€" : "$" ;

const btns= ["24h","7d","14d","30d","60d","200d","1y","max"];

const switchChartState = (key) => {
  switch(key){
    case "24h":
      setDays("24h");
      setLoading(true);
      break;

    case "7d":
      setDays("7d");
      setLoading(true);
      break;
      
      case "14d":
      setDays("14d");
      setLoading(true);
      break;

    case "30d":
      setDays("30d");
      setLoading(true);
      break;

      case "60d":
      setDays("60d");
      setLoading(true);
      break;

    case "200d":
      setDays("200d");
      setLoading(true);
      break;
      
    case "1y":
      setDays("365d");
      setLoading(true);
      break;  

    case "max":
      setDays("max");
      setLoading(true);
      break;

    default:
      setDays("24h");
      setLoading(true);
      break;
      
  }
}


useEffect(() => {

  const fetchCoins= async () => {
    
    try {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      const {data:chartData} =  await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
      setCoin(data);
      setPrice(data.market_data.current_price["inr"]);
      setChartArray(chartData.prices);
      
      
      
      setLoading(false);
      const lowValue = data.market_data.low_24h[currency];
      const highValue = data.market_data.high_24h[currency];
      const currentValue = data.market_data.current_price[currency];

      const completionPercentage = ((currentValue - lowValue) / (highValue - lowValue)) * 100;
      setProgressWidth(completionPercentage);

      
      
    } catch (error) {
      
      setError(true);
      setLoading(false);
    }
    
  
  }

  fetchCoins();
  

}, [params.id,currency,days])


if(error){
  return <ErrorComp message="Error Occure during featching coins details" />
}

const handleOptionChanged = (event) => {
  setCurrency(event.target.value);
  setPrice(coin.market_data.current_price[currency])
}




  return (
    <div>
     
      {loading ? <Loading/> 
    : 
    
    (

      <div>

<div className=' main-container chart'>

<Chart currency={currencySymbol} arr={chartArray} days={days} />

</div>

<div className='main-container button-container'>
 {
  btns.map((i) => 
  <button className='btns'  key={i} onClick={()=> switchChartState(i) } >{i}</button>
  )
 }
</div>

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

   
      
      <div className=' main-container'>

      <div className='coin-details-card-main ' > 
        
        <div className='coin-details-card-first' >
         <p className='text1'>last updated on {coin.market_data.last_updated.split("G")[0]}</p>
         <img className='coin-detail-img' style={{width:"50px"}} src={coin.image.large} alt='coin img'  />
         <h2>{coin.symbol}</h2>
         <p>{coin.name}</p> 
         <p className='text2'>{price ? `${currencySymbol} ${coin.market_data.current_price[currency]}` : "NA"} </p>
         <p className='market-change'>
         {coin.market_data.price_change_percentage_24h > 0 ?  <span className="arrow-icon">&#9650;</span> : (<span className='arrow-icon2' >&#x25BC;</span> )}
        
         {coin.market_data.price_change_percentage_24h}
         </p>

        
        
        <p className='badge'>{`#${coin.market_cap_rank}`}</p>
        
        <div >
        <div className='progress-bar-container container2 '>
    <div className='progress-bar' style={{ width: `${progressWidth}%` }}></div>
  </div>
  
  <div className='range'> 
  <span className='low-indication'>{currencySymbol} {coin.market_data.low_24h[currency]}</span>
 
 <span>24H Range</span>
 <span className='high-indication'>{currencySymbol} {coin.market_data.high_24h[currency]}</span>

  </div>
  
 
</div>

  <div className='item'>
      <span>Max Supply</span>
      <span> {coin.market_data.max_supply} </span>
        
  </div>
  <div className='item'>
      <span>circulating Supply</span>
      <span> {coin.market_data.circulating_supply} </span>
        
  </div>
  
   <div className='item'>
      <span>market_cap</span>
      <span> {currencySymbol} {coin.market_data.market_cap[currency]} </span>
        
  </div> 
   <div className='item'>
      <span>All Time Low</span>
      <span> {currencySymbol}{coin.market_data.atl[currency]} </span>
        
  </div>
  
   <div className='item'>
      <span>All Time high</span>
      <span>{currencySymbol} {coin.market_data.ath[currency]} </span>
        
  </div>


        </div  >
        
    
        <div>

    
        </div>
     </div>

      </div>
      </div>
      
   ) }
  
    </div>
  )
} 

export default CoinDetails