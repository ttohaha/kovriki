import React, { useState, useEffect } from 'react';
import './TypingText.css'

function TypingText({startText, endText, deleteSpead, typeSpead}) {
  const [text, setText] = useState(startText);
  const [del, setDel] = useState(false);
  // const endText = 'Hello world...';

  useEffect(() => {
    if (text === endText) {
      setDel(!del)
      
      setTimeout(() => {
        setText(text.slice(0, -1))
      }, deleteSpead); 
    } else {
      {del ?
        text == startText ?
            setTimeout(()=>{
              setText(text + endText[text.length]);
              setDel(!del)
            }, typeSpead)
          : 
            setTimeout(() => {
              setText(text.slice(0, -1))
            }, deleteSpead)
         
      : 
        setTimeout(()=>{
          setText(text + endText[text.length]);
        }, typeSpead)
      }
    }
  }, [text]);

  return <div>{text} <span className='cursor'>|</span> </div>;
}

export default TypingText;