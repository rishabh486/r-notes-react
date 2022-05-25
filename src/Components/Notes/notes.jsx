import React,{useState} from 'react'
import { AddNotes } from '../../Reducers/notes-reducer'
import "./notes.css"
import {useNotes} from "../../Context/notes-context"
function Notes({setIsOpen}) {
    const {dispatch}=useNotes()
    const[selTag,setSelTag]=useState("")
    console.log(selTag)
    const[selPriority,setSelPriority]=useState("")
    console.log(selPriority)
    const[selColor,setSelColor]=useState("")
    console.log(selColor)
    const[title,setTitle]=useState("")
    console.log(title)
    const[bodyText,setBodyText]=useState("")
    console.log(bodyText)
  return (
    <div>
        <div className='main-content centered'>
            <div>
          <label className='notes-title' for="notes">title</label>
          </div>
          <textarea onChange={(e)=>{const text=e.target.value
        setTitle(text)}} id="notes" name="w3review" >

          </textarea>
          <div>
          <label className='notes-body' for="body">Body</label>
          </div>
          <textarea  
           onChange={(e)=>{const body=e.target.value
            setBodyText(body)}}
          className='body-text' id="body" name="w3review" >
            
          </textarea>
           <div className='tags-div'>
               <div>
               <label for="cars">Choose a tag:</label>

              <select  name="cars" id="cars"  onChange={(e)=>{
                  const item=e.target.value
                  setSelTag(item)
              }}>
               <option value="gym">gym</option>
               <option value="activity">activity</option>
               <option value="office">office</option>
                <option value="home">home</option>
              </select>
              </div>
              <div>
              <label for="cars">Choose priority</label>

                  <select 
                  onChange={(e)=>{
                    const item=e.target.value
                    setSelPriority(item)}}
                  name="cars" id="cars">
                     <option value="high">high</option>
                       <option value="low">low</option>
                        <option value="medium">medium</option>
  
                    </select>
          </div>
          <div>
              <label for="cars">Choose a color</label>

                  <select 
                     onChange={(e)=>{
                        const item=e.target.value
                        setSelColor(item)}}
                  name="cars" id="cars">
                     <option value="blue">blue</option>
                       <option value="green">green</option>
                        <option value="red">red</option>
  
                    </select>
          </div>
          <div>
              <button onClick={()=>{setIsOpen(false);AddNotes({title:title,bodyText:bodyText,tags:{tag:selTag,priority:selPriority,color:selColor}},dispatch)}}>Create</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Notes