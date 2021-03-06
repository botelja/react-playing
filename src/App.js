import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import RandomColor from './components/RandomColor';
import './App.css';

function App() {

  const [color, setColor] = useState('')
  const [counter, setCounter] = useState(0)
  const [colors, setColors] = useState([])
 
  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch('http://www.colr.org/json/color/random')
      const data = await result.json()
      setColor(data.new_color)     
    }

    fetchData() 
    
  }, [counter])

  const handleClick = () => {
    setColors([...colors, color])
    setCounter(counter + 1)
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomColor 
          color={color}
          handleClick={handleClick}
          colors={colors}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
