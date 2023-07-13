import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data'

export default function Review(){
    let [index, setIndex] = useState(0)
    const {name, job, image, text} = reviews[index]
    
    const checkprevbtnandnextbtn = (number)=>{
            if(number > reviews.length -1){
                return 0
            }
            if(number < 0){
                return reviews.length - 1
            }
            return number
    }
    const prevbtn= ()=>{ 
        setIndex(()=>{
            let newIndex = index + 1
            return checkprevbtnandnextbtn(newIndex)
            // return newIndex
        })
        
    }

    const nextbtn= ()=>{
        setIndex(()=>{
            let newIndex = index- 1
            return checkprevbtnandnextbtn(newIndex)
        })
        
    }

    const random = ()=>{
        setIndex(()=>{
            let randomPeople  = Math.floor(Math.random() * reviews.length)
          
            return randomPeople
        })
    }
  return (
    <>
    <article className='review'>
        <div className='img-container'>
            {/* {console.log(reviews)} */}
            <img src={image} className='person-img'></img>
            <span className='quote-icon'>
                <FaQuoteRight></FaQuoteRight>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn'>
                <FaChevronLeft onClick={prevbtn}></FaChevronLeft>
            </button>
            <button className='next-btn'>
                <FaChevronRight onClick={nextbtn}></FaChevronRight>
            </button>
        </div>
        <button className='random-btn' onClick={random}>Random</button>
    </article>
    </>
  )
}
