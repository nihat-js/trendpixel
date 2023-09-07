import { useState } from "react"

export function AuthInput({ placeholder, name, onChange, type = "text" }) {

  // const [isInputFocused, setIsInputFocused] = useState(false);

  return <div
    className="auth-input-group mb-2 bg-white  my-4">
    <p className="mb-2 text-gray-500"> {placeholder} </p>
    <input name={name}
      className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-20 "
      onChange={onChange}
      // onBlur={() => setIsInputFocused(false)}
      // onFocus={() => setIsInputFocused(true)}
      type={type} />
  </div>
}


