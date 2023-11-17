import React, { useState } from 'react';
import './css/body.css';
import ReactPlayer from 'react-player';
import image from './Image/deathnote.jpeg'


const Body = (props) => {
  const [likes, setLikes] = useState(0) // likes=15
  function count() {
      setLikes(likes + 1);  //(15+1)
  }
  const [text, setText] = useState('')
  function reset() {
      setText('')
  }
  const [names, setNames] = useState([
    { name: 'Rem' },
    { name: 'I am the one' },
    { name: 'Gelus' },
    { name:'Light'}
])
const [index, setIndex] = useState(0);

function change() {
    const newIndex = (index + 1) % names.length;
    setIndex(newIndex);
}


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <ReactPlayer url={'https://www.youtube.com/watch?v=0zYw5IuEUZ0'} controls height={500} width={1000} />
      </div>

      <div>
        <div>
        <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name of victim : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>Registered name : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                 <button onClick={props.fun}> click me</button>
            </div>
        </div >
        <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={image} alt="retry" />
        <div style={{ display: 'flex', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
      <p className='bold-text' style={{ fontSize: '25px', height: '40vh'}}>
        Ryuk is a captivating and enigmatic character in the renowned<br></br>
        manga and anime series, Death Note. As a Shinigami, or god of death, Ryuk's introduction<br></br>
        into the human world sparks the complex narrative of Death Note. With his distinct<br></br>
        skeletal appearance, hollow eyes, and perpetual grin, Ryuk exudes an aura of mystery<br></br>
        and otherworldliness. Unlike traditional depictions of grim reapers, Ryuk possesses <br></br>
        a nonchalant and somewhat mischievous personality. His decision to drop a Death <br></br>
        Note—a supernatural notebook capable of causing death—into the mortal realm sets<br></br>
        the stage for a riveting tale of morality, power, and consequences. Ryuk's role as<br></br>
        an observer, indifferent to human affairs yet intrigued by their actions, adds layers<br></br>
        of complexity to the storyline, making him an iconic and unforgettable figure in the<br></br> 
        realm of anime and manga.
      </p>
    </div>
        </div>
        <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p> {names[index].name}</p>
            <button onClick={change} style={{ backgroundColor: 'blue', color: 'white'}}>Change me</button>
                </div>
      </div>
    </div>
    
  );
};

export default Body;
