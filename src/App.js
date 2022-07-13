import React from 'react'
import {useState} from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
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
    <FeedbackForm/>
    <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback = {feedback} handleDelete = {handleDelete}/>
  </div>
  </>
)
}

export default App