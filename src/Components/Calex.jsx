import React, { useState, useEffect } from 'react'
import calex1 from './assets/calex.jpeg'
import calex2 from './assets/cringe1.jpg'
import calex3 from './assets/candid1.jpg'
import main from './styles/Main.css'
import { Container } from '@mui/material'
function Calex() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [    { url: calex1, className: 'mypic mypic-1' },{ url: calex2, className: 'mypic mypic-2' },{ url: calex3, className: 'mypic mypic-3' },]
  const currentImage = images[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex, images])

  return (
    <div className='mycontent'>
      {images.map((img) => (
        <img
          key={img.url}
          src={img.url}
          className={`mypic ${img.className} ${img.url === currentImage.url ? 'visible' : 'hidden'}`}
        />
      ))}
      <Container>
        <h1>Let's know him!</h1>
      </Container>
    </div>
  )
}

export default Calex