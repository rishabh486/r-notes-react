import React from 'react'
import "./usernotes.css"
import {useNotes} from "../../Context/notes-context"
function UserNotes() {
    const {state:{notes}}=useNotes()
    console.log(notes[0])
  return (
    <div className='decoration'>
         {notes && notes.map((note)=>(<div className='user-notes'>
               <div className='user-notes-detail'>
                   <div>
                      <div><h1>Title:</h1><h1>{note.title}</h1>
                     <h1>Body:</h1><h1>{note.bodyText}</h1></div>
                    </div>
                  <div className='tags'>
                      <h1>{note.tags.priority}</h1>
                      <h1>{note.tags.tag}</h1>
                      <h1>{note.tags.color}</h1>
                  </div>
                </div>
             </div>))} 
       
    </div>
  )
}

export default UserNotes