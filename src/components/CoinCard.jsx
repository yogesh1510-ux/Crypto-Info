import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = (props) => {
    return (
        <div className='cardview ' > 
        
    
       <Link  to={`/coin/${props.id}`}  >
            <img src={props.img} alt='coin img'  />
            <h2>{props.symbol}</h2>
            <p>{props.name}</p>
            <p>{props.price ? `${props.currencySymbol} ${props.price}` : "NA"}</p>
       </Link>
        </div>
      )
}

export default CoinCard