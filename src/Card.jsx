import { useState } from "react";
import InBox from "./inBox";
const dogsData = [
  {
    name: 'Akita',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/akita-700x700.jpg'
  }, 
  {
    name: 'American Bulldog',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/11/american-bulldog-700x700.jpg'
  }, 
  {
    name: 'Basenji',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/Basenji-thumbnail.jpg'
  }, 
  {
    name: 'French Bulldog',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/french-bulldog-frenchie-700x700-e1688013927858.jpg'
  }, 
  {
    name: 'Golden Retriever',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/golden-retriever-700x700.jpg'
  }, 
  {
    name: 'Maltese',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/white-maltese-700x700.jpg'
  }, 
  {
    name: 'Pomeranian',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/pomeranian-red-700x700.jpg'
  }, 
  {
    name: 'Pug',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/pug-700x700.jpg'
  }, 
  {
    name: 'Corgi',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/welsh-corgy-700x700.jpg'
  }, 
  {
    name: 'Yorkshire Terrier',
    img: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/Yorkshire-Terrier-700x700.jpg'
  }, 

]

const Card = () => {
  const [index, setIndex] = useState(0);
  const [side, setSide] = useState('front');

  const toggleSide = () => {
    setSide(side === 'front' ? 'back' : 'front');
  };

  const goTo = (newIndex) => {
    setIndex(newIndex);
    setSide('front');
  };

  const goForward = () => {
    const newIndex = (index + 1) % dogsData.length;
    goTo(newIndex);
  };

  const goBackward = () => {
    const newIndex = (index - 1 + dogsData.length) % dogsData.length;
    goTo(newIndex);
  };

  return (
    <div>
      <div className="card-container" onClick={toggleSide}>
        {side === 'front' ? (
          <FrontCard img={dogsData[index].img} />
        ) : (
          <BackCard name={dogsData[index].name} />
        )}
      </div>

      <InBox name={dogsData[index].name}/> {/* Corrected the component name */}
      <button className="go-button" onClick={goBackward}>←</button>

      <button className="go-button" onClick={goForward}>→</button>
    </div>
  );
};

const FrontCard = (props) => (
  <div className="front">
    <img src={props.img} alt={props.name} />
  </div>
);

const BackCard = (props) => (
  <div className="back">
    <p>{props.name}</p>
  </div>
);

export default Card;
