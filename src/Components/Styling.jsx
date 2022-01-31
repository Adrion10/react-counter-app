import {useState}from 'react'
import {styleOne, styleTwo} from './styling'

const Styling = () => {
    const [change, setChange] = useState(false)
    return (
        <div>
           <h1 style = {change ? styleOne : styleTwo}>Styling</h1> 
           <button style = {{width: '100px', height: '40px', border: 'none', fontSize: '1.3rem', padding: '1rem' }}
           onClick={()=> setChange(!change)}
           > change stile</button>
           
        </div>
    )
}

export default Styling
