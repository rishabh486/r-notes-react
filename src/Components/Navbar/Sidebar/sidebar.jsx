import React,{useState} from 'react'
import Notes from '../../Notes/notes'
import  "./sidebar.css"
function Sidebar() {
    const[isOpen,setIsOpen]=useState(false)
  
     return (
    <div>
          <div className="side-bar">
            <div class="side-bar-heading">
                <div>
                    <h1>Filter</h1>
                </div>
                <div>
                      <h1>Clear</h1>  
                </div>
            </div>
            <div class="category-heading">
                <div>
                    <h2>Tags</h2>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Home</label>
                    <input   
                     value="men"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Gym</label>
                    <input
                     value="women"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Activity</label>
                    <input 
                    type="checkbox"
                    name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Office</label>
                    <input 
                    type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>

            </div>
            <div>
                <button className='button-container-button primary-button' onClick={()=>{setIsOpen(true)}}>CREATE NEW NOTE</button>
            </div>
            {isOpen && <Notes setIsOpen={setIsOpen}/>}
            <div class="category-heading">
                <div>
                    <h2>Priority</h2>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">High</label>
                    <input  
                     value="men"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Medium</label>
                    <input 
                     value="women"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Low</label>
                    <input 
                    type="checkbox"
                    name="user-choice-check" id="user-choice-check"/>
                </div>

            </div>
            <div class="sort-by-heading">
                <div>
                    <h2>Sort-by</h2>
                </div>
                <div class="sort-by-container">
                    <label for="user-choice-radio">Views-Low to High</label>
                    <input 
                  
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="sort-by-container">
                    <label for="user-choice-radio">Views-High to low</label>

                    <input 
                     
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar