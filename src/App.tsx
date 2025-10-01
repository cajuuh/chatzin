import React, { useState } from 'react';
import './App.css';
import InputBox from './components/input/input-text';
import { Bubble } from './utils/types';
import responsesData from './utils/answers.json'



function App() {
  const [userText, setUserText] = useState('');
  const [bubble, setBubble] = useState<Bubble[]>([]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserText(event.target.value);
  }


  const sendMessage = () => {
    if (userText.trim() === '') return;
    const newMessage: Bubble = {
      id: Date.now(),
      text: userText,
      isSender: true
    }
    setBubble(prev => [...prev, newMessage]);
    setUserText('');
    sendReceiver();
  }

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responsesData.responses.length);
    return responsesData.responses[randomIndex];
  }

  const sendReceiver = () => {
    const newMessage: Bubble = {
      id: Date.now() + 1,
      text: getRandomResponse(),
      isSender: false
    }
    setTimeout(() => {
      setBubble(prev => [...prev, newMessage]);
    }, 2000)
  }

  return (
    <div className="App">
      <div className={'input-container'}>
        <div className={'bubble-container'}>
          {bubble.map((prop) => {
            return (
              <div key={prop.id} className={prop.isSender ? 'bubble-sender' : 'bubble-receiver'}>
                {prop.text}
              </div>
            )
          })}
        </div>
        <InputBox text={userText} onChange={(e) => handleInputChange(e)} onClick={sendMessage} />
      </div>
    </div>
  );
}

export default App;
