import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <button>
            <Link to="/">Home</Link> 
            <Link to="/coins">Coins</Link> 
            <Link to="/exchanges">Exchanges</Link> 
            <Link to="/news">News</Link>
           
        </button>
    </div>
  )
}

export default Header