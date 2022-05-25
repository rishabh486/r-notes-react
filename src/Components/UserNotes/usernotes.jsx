import React,{useState} from 'react'
import "./usernotes.css"
import {delete_icon,archive_icon,trash_icon} from "../../Assests"
import {useNotes} from "../../Context/notes-context"
import {AddNotesToArchive, AddNotesToTrash, RemoveFromNotes} from "../../Reducers/notes-reducer"
function UserNotes() {
    const {state:{notes},dispatch}=useNotes()
    console.log(notes[0])
   const[color,setColor]=useState("")
   function bgColor(){
     setColor()
   }
  return (
    <div className='decoration'>
         {notes && notes.map((note)=>(<div className='user-notes'>
               <div   className={`user-notes-detail ${note.tags.color}`}>
                   <div className='upper-div'>
                      <div><h1>Title:</h1><h1>{note.title}</h1>
                     <h1>Body:</h1><h1>{note.bodyText}</h1></div>

                     <div>
                    <img className='archive-icon' 
                    onClick={()=>AddNotesToArchive(note._id,note,dispatch)}
                    src={archive_icon}/>
                    <img 
                     onClick={()=>RemoveFromNotes(note._id,dispatch)}
                    className='delete-icon' src={delete_icon}/>
                     <img 
                     onClick={()=>AddNotesToTrash(note._id,note,dispatch)}
                    className='trash-icon' src={trash_icon}/>
                    </div>
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