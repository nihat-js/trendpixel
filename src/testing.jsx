import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



export default function App() {

  const [orderList, setOrderList] = useState([
    {

      name: 'Chicken Straganoff',
      count: 1,
    },
    {
      name: 'Seusar Salat',
      count: 1,
    }
  ])

  const [selectedEl, setSelectedEl] = useState()


  function handleClick(count) {

    let newOrderList = orderList.map(el => {
      if (el.name === selectedEl) {
        el.count += count
      }
      if (el.count ===0){
        setSelectedEl()
        return null
      }
      return el
    }).filter(el => el !== null)

    console.log(newOrderList);
    setOrderList(newOrderList)


  }


  return (
    <div>

      <ul className="list">
        {
          orderList.map(o =>
            <li style={{ backgroundColor: selectedEl === o.name ? "#666" : "#fff" }} onClick={() => setSelectedEl(o.name)} > {o.name}  ( {o.count} ) </li>
          )
        }
      </ul>

      {
        selectedEl &&
        <div className='group' style={{ display: 'flex', gap: "10px" }}>
          <button onClick={() => handleClick(-1)}>  - </button>
          <p>   {orderList.find(el => el.name === selectedEl).count}  </p>
          <button onClick={() => handleClick(+1)} >  + </button>
        </div>

      }

    </div>
  )
}
