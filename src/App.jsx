import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './Components/QuoteBox'
import { useState } from 'react';
import colors from './json/colors.json'

function App() {

  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom] 
  }

  const [quoteRandom, setquoteRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(randomElementFromArray(colors))

  const handleClick = () => {
    setquoteRandom(randomElementFromArray(quotes))
    setcolorRandom(randomElementFromArray(colors))
  }

  return (
    <div style={{backgroundColor:colorRandom}} className="App">
      <QuoteBox 
        quoteRandom={quoteRandom} 
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
