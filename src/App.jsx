
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks (newBookmarks)
  } 

  const handleMarkAsRead = (id,time) =>{
    setReadingTime(readingTime + time);

    // Remove the read blog from bookmark
    // console.log('remove', id);

    const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id );
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <main className='max-w-11/12 mx-auto md: flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
