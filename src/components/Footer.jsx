import React from 'react'
import "./Footer.css"
const Footer = () => {
    const currentYear= new Date().getFullYear();
  return (
    <div className='footer' > 
         <div className='footer-top' >
        
        <h3>Crypto Info</h3>
        <p>  CryptoInfo is your one-stop destination for all things related to cryptocurrencies. We provide real-time data of Crypto and Exchanges to help you make informed decisions in the crypto market.</p>
         <ul className="scocial-links">
          <li> <a href="https://www.linkedin.com/in/yogesh-naikwadi-32a220190" target='_blank' > <i className='fa fa-linkedin-square'> </i> </a></li>
          <li> <a href="https://github.com/yogesh1510-ux" target='_blank' > <i className='fa fa-github'> </i> </a></li>
         
          
         </ul>
          
      </div>

      <div className='footer-bottom' >
        <p>copyright &copy;{currentYear} <span>Yogesh Naikwadi</span> </p>
      </div>

    </div>
   
  )
}

export default Footer