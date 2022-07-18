import { createContext , useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    
    const [feedback , setFeedback] = useState(
        []
    )


    //Delete Feedback
    function handleDelete(id){
        if(window.confirm("Are you Sure?")){
         setFeedback(feedback.filter((item)=>
           item.id !== id
         ))
        }
       }

    //    Add Feedback
    function addFeedback(newFeedback){
   
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
      }
    
    
    return <FeedbackContext.Provider value={
        {
            feedback,
            handleDelete,
            addFeedback
        }
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext