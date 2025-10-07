import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <main className="main-container">
      <div className="input-box">
        <div className="input-fields">
          <label>
            Upper Text
            <input type="text" placeholder='shut up' name='Upper-text'/>
          </label>
          <label>
            Bottom Text
            <input type="text" placeholder='and take my money' name='Bottom-text'/>
          </label>
        </div>
        <div className="button-container">
          <button className='get-img'>Get a new img</button>
        </div>
      </div>
      <div className='meme-box'>
        <img src="https://i.imgflip.com/1bij.jpg" alt="Meme template" />
        <span className='Top'>TEST TOP TEXT</span>
        <span className='bottom'>TEST BOTTOM TEXT</span>
      </div>
      <button className='download'>Download</button>
    </main>
  );
}