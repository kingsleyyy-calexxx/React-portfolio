import React from 'react'
import './styles/Footer.css';
import insta from './assets/insta.png'
import link from './assets/lin.svg'
import fb from './assets/fb.png'
import git from './assets/git.svg'
import 
function Footer() {
    return (
        <div >
          <div className='logo-cont'>
            <a href="https://www.instagram.com/_.calex.__18_/" target='_blank'>
              <img src={insta} className='logos'/>
            </a>
            <a href="https://www.linkedin.com/in/kingsley-calex-6314291aa/" target='_blank'>
              <img src={link} className='logos'/>
            </a>
            <a href="https://www.facebook.com/people/Kingsley-Calex/pfbid02PTuMMwFz81VKgKfeX2QWe9td79EhYBTzoywAY91CaFxYziySm9TaB2yzAgFDPmMMl/"><img src={fb} className='logos'/></a>
            <a href="https://github.com/kingsleyyy-calexxx"><img src={git} className='logos'/></a>
          </div>
          <div className="love">
            <h1>Made with ❤</h1>
        </div>
        </div>
        
    )
}

export default Footer