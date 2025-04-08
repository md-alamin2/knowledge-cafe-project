import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) =>{
    setBookmarked([...bookmarked, blog]);
  }


  const handleMarkAsRead = (time) =>{
    setReadingCount(readingCount + time)
  }
  

  return (
    <>
      <Navbar></Navbar>
      <div className="blogs-container flex mt-10 container mx-auto">
        <div className='left-container w-[70%]'>
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className='right-container w-[30%] text-center'>
          <h1>Reading time : {readingCount}</h1>
          <h1>bookmark count : {bookmarked.length}</h1>
          {
            bookmarked.map((marked)=><p>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
