import React from 'react'
import {useState} from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import Reviews from './data/reviews'

function App() {

  
  const [feedback , setFeedback] = useState(Reviews)

  function handleDelete(id){
   if(window.confirm("Are you Sure?")){
    setFeedback(feedback.filter((item)=>
      item.id !== id
    ))
   }
  }

  return(
  <>
  <div className='container'>
    <Header />
    <FeedbackList feedback = {feedback} handleDelete = {handleDelete}/>
  </div>
  </>
)
}

export default App