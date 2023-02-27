import { useState } from "react";

const ToggleCounter = () => {
    const [count,setCount] = useState(0)
    return (
    <div>
    <p>{count}</p>
    <button onClick={() => setCount(count+1)} className="btn">more</button>
    <button onClick={() => setCount(count-1)} className="btn">less</button>
    <button onClick={() => setCount(0)}>reset</button>
    </div>)
}
    
const App = () => {
    const [showCounter,setShowCounter] = useState(true)
    let showHide = "show"
return(
        <div>
            <button onClick={() => setShowCounter(!showCounter)} className="btn">Show Counter</button>
            {showCounter && <ToggleCounter/>}
        </div>
    )
//todo - change button name 
}

export default App;