import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className="blogs-container flex mt-10 container mx-auto">
        <div className='left-container w-[70%]'>
          <Blogs></Blogs>
        </div>
        <div className='right-container w-[30%] text-center'>
          <h1>Reading time : 0</h1>
          <h1>bookmark count : 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
