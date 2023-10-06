// Code Keypad Component Here
import React from "react"

function Keypad (){
    return (
        <div>
        <form>
        <input 
        type='password'
        placeholder='Enter password here'
        onChange={()=> console.log('Entering password...')}/>
        </form>
        </div>
    )
}

export default Keypad;