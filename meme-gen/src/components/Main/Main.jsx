import React from 'react';
import './Main.css';

export default function Main() {
    const [meme, setMeme] = React.useState({
        memeImg: 'https://i.imgflip.com/1bij.jpg',
        topRow: 'TOP TEXT',
        bottomRow: 'BOTTOM TEXT'
    })
    function changeTop(event){
        const {value} = event.currentTarget 
        setMeme(prev => ({...prev, topRow: value.length === 0 ? 'TOP TEXT': value}))
    }
    function changeBottom(event){
        const {value} = event.currentTarget 
        setMeme(prev => ({...prev, bottomRow: value.length === 0 ? 'BOTTOM TEXT' : value  }))
    }
  return (
    <main className="main-container">
      <div className="input-box">
        <div className="input-fields">
          <label>
            Upper Text
            <input 
             type="text"
             placeholder='shut up'
             name='Upper-text'
             onChange={changeTop}/>
          </label>
          <label>
            Bottom Text
            <input 
             type="text" 
             placeholder='and take my money' 
             name='Bottom-text'
             onChange={changeBottom}/>
          </label>
        </div>
        <div className="button-container">
          <button className='get-img'>Get a new img</button>
        </div>
      </div>
      <div className='meme-box'>
        <img src={meme.memeImg} alt="Meme template" />
        <span className='Top'>{meme.topRow}</span>
        <span className='bottom'>{meme.bottomRow}</span>
      </div>
      <button className='download'>Download</button>
    </main>
  );
}