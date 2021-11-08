import React from 'react'
import './featured.css'
import writers from '../../writers'
import Writer from './Writer'


const Featured = () => {
    return (
        <div className='featured'>
            <h1>Featured writers</h1>
            <div className='writers'>
                {writers.map((writer)=>(
                <Writer key={writer.id} pic={writer.pic} name={writer.name} />
                ))}
                          
            </div>
        </div>
    )
}

export default Featured
