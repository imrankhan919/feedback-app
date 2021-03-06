import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

import {FaTimes , FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
function FeedbackItem({DatafromList}) {

  const {handleDelete , editFeedbackFunction} = useContext(FeedbackContext)

    // const handleClick = () =>{
    //  setRating((prev)=>{
    //     console.log(prev)
    //     return prev + 1
    //  })
    // }

  return (
   <Card >
    <div className="num-display">{DatafromList.rating}</div>
    <button onClick={()=> handleDelete(DatafromList.id)} className="close">
      <FaTimes/>
    </button>
    <button className="edit" onClick={()=> editFeedbackFunction(DatafromList)}>
      <FaEdit/>
    </button>
    <div className="text-display">{DatafromList.text}</div>
   {/* <button onClick={handleClick} >Click Me</button> */}
   </Card>
  )
}

export default FeedbackItem