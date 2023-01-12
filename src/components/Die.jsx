import { useState } from 'react'


export default function Die(props) {


  const styles = {
    backgroundColor :props.isHeld? "#59E391":''

}




  return (
  
  
     
      
       <div onClick={props.holdDice} style={styles} className="die-face"><h2 className="die-num">{props.value +1}</h2></div>
     
  

     
 
  )
}


