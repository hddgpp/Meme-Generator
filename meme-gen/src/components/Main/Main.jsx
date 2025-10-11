import React from 'react';
import html2canvas from 'html2canvas';
import {fonts} from '../../data/font.js'
import './Main.css';

export default function Main() {
    const [meme, setMeme] = React.useState({
        memeImg: 'https://i.imgflip.com/1bij.jpg',
        topRow: 'TOP TEXT',
        bottomRow: 'BOTTOM TEXT',
        font: 'outfit'
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
      fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImg() {
      const randomId = Math.floor(Math.random() * allMemes.length)
      const newMemeUrl = allMemes[randomId].url
      setMeme(prev => ({...prev, memeImg: newMemeUrl}))
    }

    function handleFontChange(e) {
    setMeme(prev => ({ ...prev, font: e.target.value }))
  }

    function changeTop(event){
        const {value} = event.currentTarget 
        setMeme(prev => ({...prev, topRow: value.length === 0 ? 'TOP TEXT': value}))
    }
    function changeBottom(event){
        const {value} = event.currentTarget 
        setMeme(prev => ({...prev, bottomRow: value.length === 0 ? 'BOTTOM TEXT' : value  }))
    }

    function downloadMeme() {
  const memeBox = document.querySelector('.imgD');
  if (!memeBox) return;

  html2canvas(memeBox, { useCORS: true, backgroundColor: null }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
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
          <button
           className='get-img' 
           onClick={getMemeImg}
          >Get a new img</button>
        </div>
      </div>
      <div className="controls">
        <label>
          Font Style:
          <select onChange={handleFontChange}>
            {Object.keys(fonts).map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="meme-box">
        <div className='imgD'>
        <img src={meme.memeImg} alt="meme" />
        <span 
          className='top' 
          style={{ fontFamily: fonts[meme.font] }}
        >
          {meme.topRow}
        </span>
        <span 
          className='bottom' 
          style={{ fontFamily: fonts[meme.font] }}
        >
          {meme.bottomRow}
        </span>
        </div>
      </div>
      <button className='download' onClick={downloadMeme}>Download</button>
    </main>
  );
}