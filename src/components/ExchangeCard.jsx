import React from 'react'

const ExchangeCard = (props) => {
  return (
    <div className='cardview ' > 
    

   <a  href={props.url} target='blank' >
        <img src={props.img} alt='exchange img'  />
        <h2>{props.rank}</h2>
        <p>{props.name}</p>
   </a>
    </div>
  )
}

export default ExchangeCard