
import './App.css'
import { useEffect, useState } from 'react'
function App() {
   
  const [color, setColor] = useState("")
  const click = color =>
  {
    setColor(color)
    // console.log(e.target.value);
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  return (
  
      <div style={{height:'500px'}} className='justify-content-center align-items-center  m-5  '>
        <h1>Background Color Changer</h1>
        
        <div className='d-flex justify-content-evenly align-items-center m-5 p-2 '>
        <button onClick={()=>{click("blue")}} type="button" className='btn btn-primary '>Blue</button>
        <button onClick={()=>{click("Gray")}} type="button" className='btn btn-secondary'>Gray</button>
        <button onClick={()=>{click("Green")}} type="button" className='btn btn-success'>Green</button>
        <button onClick={()=>{click("Red")}} type="button" className='btn btn-danger'>Red</button>
        <button onClick={()=>{click("Yellow")}} type="button" className='btn btn-warning'>Yellow</button>

        </div>
        
     </div> 
    
  )

}
export default App
