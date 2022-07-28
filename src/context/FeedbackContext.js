import { createContext , useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    
    const [feedback , setFeedback] = useState(
        []
    )

    const [editFeedback , setEditFeedback] = useState(
        {
            feedback : {},
            isEdit : false
        }
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
    

      //edit 

      function editFeedbackFunction(item){
        setEditFeedback( 
          {  item,
            isEdit : true}
         )
      }

    //   update

   function updateFeedback(id , updItem){
   
    setFeedback(
        feedback.map( (item)=>
        item.id === id ? {...item,...updItem} : item
      )
    )

    }

    
    return <FeedbackContext.Provider value={
        {
            feedback,
            handleDelete,
            addFeedback,
            editFeedbackFunction,
            editFeedback,
            updateFeedback
        }
    }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext