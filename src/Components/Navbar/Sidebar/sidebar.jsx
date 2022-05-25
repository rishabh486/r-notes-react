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
                    <h2>Category</h2>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">FrontEnd Develpoment</label>
                    <input  
                    //  checked={frontEnd}
                      
                     value="men"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">BackEnd Develpoment</label>
                    <input 
                    //  checked={backEnd}
                    //  onChange={()=>dispatch({type:"FILTER_BY_CATEGORY",payload:"backEnd"})}
                     value="women"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Machine Learning</label>
                    <input 
                    type="checkbox"
                    //  checked={fullStack}
                    //  onChange={()=>dispatch({type:"FILTER_BY_CATEGORY",payload:"fullStack"})}
                    name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Data Structures</label>
                    <input 
                    //  checked={algorithms}
                    //  onChange={()=>dispatch({type:"FILTER_BY_CATEGORY",payload:"algorithms"})}
                    type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>

            </div>
            <div>
                <button onClick={()=>{setIsOpen(true)}}>CREATE NEW NOTE</button>
            </div>
            {isOpen && <Notes setIsOpen={setIsOpen}/>}

            <div class="rating-heading">
                <div>
                    <h2>Rating</h2>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">4stars & above</label>
                    <input 
                   
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">3stars & above</label>

                    <input 
                    
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">2stars & above</label>
                    <input
                   
                     type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">1stars & above</label>

                    <input 
                    
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
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