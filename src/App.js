import { useState } from "react";


const App = () => {
    const [count,setCount] = useState(0)
return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)} className="btn">more</button>
            <button onClick={() => setCount(count-1)} className="btn">less</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default App;