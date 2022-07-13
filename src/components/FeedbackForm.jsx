import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm() {
  
    const [text , setText] = useState("")
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [message , setMessage] = useState("")
    
    
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

    return (
    <Card>
        <form>
            <h2>How would you rate us?</h2>
            <RatingSelect/>
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