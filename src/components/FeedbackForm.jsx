import { useState , useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm() {
  
    const {addFeedback} = useContext(FeedbackContext)

    const [text , setText] = useState("")
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [message , setMessage] = useState("")
    const [rating , setRating] = useState(10)
    
    
    function handleTextChange(e){
        // console.log(e.target.value)
        if(text=== ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== " "  && text.trim().length <=10){
            setMessage('Text must be at least 10 charactrs long')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text : text,
                rating : rating
            }
           addFeedback(newFeedback)
            setText("")
        }
    }


    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate us?</h2>
            <RatingSelect select = {(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input value={text}  type="text" placeholder='Write review here..' onChange={handleTextChange} />
                <Button type = 'submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message' >
            {message}
            </div>
           
            }
        </form>
    </Card>
  )
}

export default FeedbackForm