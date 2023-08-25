import React from 'react'

const PageChange = ({page,setPage}) => {
  
    const handlePageChange = (newPage) =>{
        
        setPage(newPage);
    }


  
  
    return (
    <div className='pagechange'>
        <button id='prev' disabled={page===1} onClick={()=> handlePageChange(page-1)} >previous</button>
        <button id='nxt'  onClick={()=> handlePageChange(page+1)}>next</button>
    </div>
  )
}

export default PageChange