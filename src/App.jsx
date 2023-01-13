import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {
  const [nums, setNums] = useState(allNewDice())
  const value = 0;
 

  function allNewDice(){
    const newSetOfArray = [];
    for(let i=0; i<10; i++){

      let num = Math.floor(Math.random() * 6)+1
      let obj ={
           value : num,
           isHeld : false,
           id:nanoid()
      }
      newSetOfArray.push(obj);
    }
   
    return newSetOfArray
  }

  console.log(allNewDice())

  function holdDice(id){
    
    console.log(id)
  }


 let numsArray = nums.map((num)=>{
 
  return(
    
     
      <Die key={num.id} value={num.value} isHeld={num.isHeld} holdDice={()=> holdDice(num.id) }/>
    
  )
 })


    
  function rollDice(){
     
       setNums(prevNumArray=>{
        return (allNewDice().map(die=>{

           return(
                {      ...prevNumArray,
                      "value" : die.value,
                      "isHeld": true
                }
           )
        })
        )
       
       })
  }



  

  // console.log(nums)
 

  return (
    <main className="App">

 <div className="bigContainer">
 <h1>Tenzies!</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>

 <div className = "die-container">

      {numsArray}
 
   
  
     
  </div>

  <button className="btn" onClick={rollDice}>Roll</button>


 </div>
 
  

    </main>
  )
}

export default App
