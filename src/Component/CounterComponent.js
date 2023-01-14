import { useState , useEffect} from "react"
import './Count.css'


let invalidstatement = document.getElementById('invalid');
let btnshow = document.getElementById('start-btn');


const CounterComponent = () => {
    
    const [count, setCount] = useState(0);
    const [invalstate, setinvalstate]=useState(false);
    const [btn, setbn]=useState(false);

    useEffect(()=>{
console.log(count)
    },[count])
    // setinvalstate(invalstate)
    const increment = () => {
        if (count < 10) {
        setCount((prevCount) => prevCount + 1)
    } else {
        // btnshow.style.display = "block"
        setbn(!btn)
        setCount(10)
    }
    
}

 
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1)
           
        }
        else {
            setinvalstate(!invalstate)
            setCount(0)
        }
    }

    const initial = () => {
        setCount((prevCount) => prevCount = 0)
        setbn(!btn)
    }


    return (
        <div>
           
            <h1 className="heading">Counter using React</h1>
            <p className="count-value">Your Current Count is : {count} </p>
           {invalstate &&<div id="invalid" > Error:Cannot go below 0 </div>}
            <div className="button-wrapper">
                <button className="action-btn" onClick={decrement}>Decrement</button>
                <button className="action-btn" onClick={increment}>Increment</button>
              {btn &&<button id="start-btn" onClick={initial}>Go Back to 0</button>}


            </div>
        </div>
    )
}
export default CounterComponent