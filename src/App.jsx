
import Confetti from 'react-confetti'
import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'



function App() {
  const [nums, setNums] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  

  useEffect(()=>{

 

           nums.every(die => die.isHeld === true && die.value === nums[0].value)? setTenzies(true): ''

           
         
          
            
             
   
      //  console.log("Dice state changed")
          
  }, [nums])




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

  // console.log(allNewDice())

  function holdDice(id){
    
    setNums(prevNums=>{
       return prevNums.map(die=>{
            return id === die.id? {
                   ...die,
                   isHeld: !die.isHeld
            }: die

       
       })
      
    })
   
  }

  // console.log(nums)
  
 let numsArray = nums.map((num)=>{
 
  return(
    
     
      <Die key={num.id} value={num.value} isHeld={num.isHeld} holdDice={()=> holdDice(num.id) }/>
    
  )
 })


    
  function rollDice(){
    if(tenzies === true){
      setNums(allNewDice())
      setTenzies(false)
 



    }else{
      setNums(prevNumArray=>{
        return (allNewDice().map((die, index)=>{

           return(

            prevNumArray[index].isHeld === false?
                {      ...prevNumArray[index],
                      "value" : die.value,
                     
                }: prevNumArray[index]
           )
        })
        )
       
       })




    }
      


     
       
  }


const styles ={ 
     backgroundColor : tenzies && "Green"
 }
  

  // console.log(nums)
 

  return (

    <main className="App">

   {tenzies && <Confetti />}

 <div className="bigContainer">
 <h1>Tenzies!</h1>
      <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>

 <div className = "die-container">

      {numsArray}
 
   
  
     
  </div>

  <button className="btn" onClick={rollDice} style={styles} >{tenzies?"New Game":"Roll"}</button>


 </div>
 
  

    </main>
  )
}

export default App
