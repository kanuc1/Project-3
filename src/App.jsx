import './App.css'
import './inBox.css'
import Card from "./Card.jsx"


function App() {

  return (
    <>
      <div className="intro-container">
        <h1 >The Ultimate Dog Expert</h1>
        <h2 >How good are you at identifying Dogs? Test all of your Dog knowledge here!</h2>
        <h3 >Number of cards: 10 </h3>
      </div>

      <Card/>
    </>
  )
}

export default App