import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ handleDelete}) {
  
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0 ){
    return 
    (
      <p>No Reviews Here</p>
    )
  } else{
    return (
      <div className='feedback-list'>
       { feedback.map((item)=>
          <FeedbackItem key={item.id} DatafromList = {item} handleDelete = {handleDelete} />
       )
  
        }
      </div>
    )
  }

 
}

export default FeedbackList