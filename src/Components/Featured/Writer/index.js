import React from 'react'
import './writer.css'


const Writer = ({ pic , name}) => {
    return (
        <>
          <div className='writer'>
                    <img src={pic} alt="" />
                    <p>{name}</p>
                </div>  
        </>
    )
}

export default Writer
