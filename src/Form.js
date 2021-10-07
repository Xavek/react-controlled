import {useState} from 'react'
import Color from './Color'

function Form() {
    const [color,setColor] = useState(null)
    const formStyles = {
        margin: "15px",
        height: "25px"
    }
    return (
        <div>
            <Color color={color} />
            <form>
                <label htmlFor="input color">Input color</label>
                <input type="text" placeholder="ENter the color name" style={formStyles} required="true" onChange={(e)=>setColor(e.target.value)}/>
            </form>
        </div>
    )
}

export default Form
