import { useState } from "react"

export function AuthInput({ placeholder }) {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return <div style={{
    position : 'relative',
    
  }}  className="auth-input-group">
    <p style={{
      position : 'absolute',
      left : '10px',
      top : 0,
      transform : 'translaateY(-50%)',
      display : isInputFocused ? 'block' : 'none',
      background : 'white',
      zIndex : 10,
    }} > {placeholder} </p>
    <input onBlur={() => setIsInputFocused(false)}
      onFocus={() => setIsInputFocused(true)}
      style={{ padding: '15px 20px', border: '1px solid #d3de05', '&:active': { border: '1px solid green' } }} type="text" placeholder={!isInputFocused && placeholder} />
  </div>
}


