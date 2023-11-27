import {useState} from "react";
import './Calculator.css';

export default function Calculator(){
    const[display,setDisplay]= useState('')
    
    const handleClick =(value)=>{
        setDisplay(display + value)
    }
    const Result =()=>{
        try{
            const result= eval(display)
            setDisplay(result);
        }
        catch(error){
            setDisplay('Syntax Error')
        }
    }
    const Clear =()=>{
        setDisplay('')
    }
    const Back =()=>{
        setDisplay((display)=>display.slice(0,-1));   
    }
    return(
        <div className="container">
            <span className="display">{display}
            </span>
             
            <div id="first">
            <button id="btn"  onClick={()=>handleClick('1')}>1</button>
            <button id="btn2" onClick={()=>handleClick('2')}>2</button>
            <button id="btn2" onClick={()=>handleClick('3')}>3</button>
            <button id="btn3" onClick={()=>handleClick('+')}>+</button>
            </div>
            <div>
            <button id="btn"  onClick={()=>handleClick('4')}>4</button>
            <button id="btn2" onClick={()=>handleClick('5')}>5</button>
            <button id="btn2" onClick={()=>handleClick('6')}>6</button>
            <button id="btn3" onClick={()=>handleClick('-')}>-</button>
            </div>
            <div>
            <button id="btn"  onClick={()=>handleClick('7')}>7</button>
            <button id="btn2" onClick={()=>handleClick('8')}>8</button>
            <button id="btn2" onClick={()=>handleClick('9')}>9</button>
            <button id="btn3" onClick={()=>handleClick('*')}>*</button>
            </div>
            <div>
            <button id="btn" onClick={()=>handleClick('.')}>.</button>
            <button id="btn2" onClick={()=>handleClick('0')}>0</button>
            <button id="btn2" onClick={(Result)}>=</button>
            <button id="btn3" onClick={()=>handleClick('/')}>/</button>
            </div>
            <button id="btn1" onClick={(Clear)}>C</button>
            <button id="back" onClick={(Back)}>Back</button>
           
        </div>
       
    )
}