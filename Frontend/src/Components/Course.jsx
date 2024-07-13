import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

const Course = () => {
  const [book,setBook] = useState([]);

  useEffect(()=>{
    const getBook = async ()=>{
      try {
      const res =  await axios.get("https://mernbackend-1-6o0z.onrender.com/book")
      // console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(`error getting book: ${error.message}`)
      }
    }
    getBook()
  },[])
    
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 text-center'>
        <h1 className='font-semibold md:text-4xl text-2xl'>We are Delighted to have you <span className='text-pink-500'>Here !!!</span></h1>
        <p className='mt-10'>Discover a world of knowledge and imagination at Apni Library. Our extensive collection includes books, e-books, audiobooks, and more, catering to readers of all ages and interests. Whether you're here to explore new genres, dive into research, or simply find a cozy spot to read, Apni Library is your gateway to endless possibilities. Join us today and start your journey with stories that inspire, inform, and entertain.</p>
        <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-900 duration-300 mt-7'><Link to="/">Back</Link></button>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 my-6 '>
        {book.map((item)=>{
            return(
            <Cards info={item} key={item.id}/>
            );
        })}
      </div>
    </div>
  )
}

export default Course
