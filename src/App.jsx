import { useState } from 'react'
import './App.css'

function App() {
  
  const [show, setShow] = useState(true);
  const [txtColor, setTxtColor] = useState('');
  const [color, setColor] = useState({
    name:''
  })
  
  const handleClick = () => {
    setShow(!show)
  }

  const handleColor = (e) => {
     setColor({
            ...color,
            [e.target.name]: e.target.value
        })
  }

 
  
  const handleChangeColor = () => {
  setTxtColor(color.name)
  }
  return (
    <>
       <input
                    type="text"
                    name="name"
                    value={color.name}
                    onChange={handleColor}
                    className="form-control"
                    
      />
      <br /><br /><br />
      
      {show ? <h1 className="namee" style={{color:txtColor}}>A.R. ENGINEERINGS</h1>:""}
      <button className='btn' onClick={handleClick}>Hide/Show </button> 
      <button className='btn' onClick={handleChangeColor}>Change Color</button> 
    </>
  )
}

export default App;
