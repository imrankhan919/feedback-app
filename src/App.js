import React from 'react'
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'


function App() {


  return(
  <>
  <FeedbackProvider>
  <div className='container'>
    <Header />
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
  </div>
  </FeedbackProvider>
  </>
)
}

export default App