import React from 'react'
import './social.css'
import book from '../../assests/images/book.jpg'

const Social = () => {
    return (
        <div className='social'>
            <div className='book'>
            <img  src={book} alt="" />
            </div>
            <div className='pack'>
            <div className='card'>
                <h3>LOREM IPSUM</h3>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nesciunt voluptas temporibus pariatur, numquam quiaEt nesciunt voluptas temporibus  quia</p>
            </div>
            <div className='social-media'>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            </div>
        </div>
        </div>

    )
}

export default Social
