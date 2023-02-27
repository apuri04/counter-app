import { useEffect, useState } from "react";

const ToggleCounter = ({visible}) => {
    const [count,setCount] = useState(0)
    // useEffect(() => {console.log("component did mount")},[]);
    // useEffect(() => {
    //     console.log("component did update",count)
    // });

    useEffect(() => {
        console.log("I am visible",visible)
    },[visible])

    return (
    <div>
    <h2>useeffect and useState Example</h2>
    <p>{count}</p>
    <button onClick={() => setCount(count+1)} className="btn">more</button>
    <button onClick={() => setCount(count-1)} className="btn">less</button>
    <button onClick={() => setCount(0)}>reset</button>
    </div>)
}
    
const App = () => {
    const [showCounter,setShowCounter] = useState(true)
return(
        <div>
            {showCounter && <ToggleCounter visible={showCounter}/>}
            <br/>
            <button onClick={() => setShowCounter(!showCounter)} className="btn">Show Counter</button>
        </div>
    )
//todo - change button name 
//useref chai front end ma display nagane but backend ma bujane kind of thing.
//usestate, useeffect, useref, usememo
//use memo - if arg , not change, if only para change then only run
}

export default App;