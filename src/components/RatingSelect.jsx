import {useState} from 'react'

function RatingSelect() {

    const [selected , setSelected] = useState(10)
    
    const handleChange = (e) =>{

    }

  return (
   <ul className="rating">
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "1"
        onChange={handleChange}
        checked = {selected === 1 }
        />
        <label htmlFor="'num1">1</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "2"
        onChange={handleChange}
        checked = {selected === 2 }
        />
        <label htmlFor="'num1">2</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "3"
        onChange={handleChange}
        checked = {selected === 3 }
        />
        <label htmlFor="'num1">3</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "4"
        onChange={handleChange}
        checked = {selected === 4 }
        />
        <label htmlFor="'num1">4</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "5"
        onChange={handleChange}
        checked = {selected === 5 }
        />
        <label htmlFor="'num1">5</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "6"
        onChange={handleChange}
        checked = {selected === 6 }
        />
        <label htmlFor="'num1">6</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "7"
        onChange={handleChange}
        checked = {selected === 7 }
        />
        <label htmlFor="'num1">7</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "8"
        onChange={handleChange}
        checked = {selected === 8 }
        />
        <label htmlFor="'num1">8</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "9"
        onChange={handleChange}
        checked = {selected === 9 }
        />
        <label htmlFor="'num1">9</label>
    </li>
    <li>
        <input type="radio"
        id='num1'
        name = 'rating'
        value = "10"
        onChange={handleChange}
        checked = {selected === 10 }
        />
        <label htmlFor="'num1">10</label>
    </li>
   </ul>
  )
}

export default RatingSelect