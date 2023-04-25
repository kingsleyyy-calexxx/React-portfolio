import React, { useEffect, useRef } from 'react';
import './styles/Skills.css';
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import py from './assets/python.svg';
import reactlog from './assets/jsx.svg';
import sql from './assets/mysql.svg';
import c from './assets/c.png';
import java from './assets/java.png';
import cpp from './assets/cpp.png';
import {Stack, Typography} from '@mui/material';
const Skills = () => {
  const htmlProgressRef = useRef(null);
  const cssProgressRef = useRef(null);
  const pythonProgressRef = useRef(null);
  const mysqlProgressRef = useRef(null);
  const cProgressRef = useRef(null);
  const cppProgressRef = useRef(null);
  const javaProgressRef = useRef(null);
  const reactProgressRef = useRef(null);
  const javaScriptProgressRef = useRef(null);

  useEffect(() => {
    const updateProgress = (progressRef, value, duration) => {
      const start = progressRef.current.value;
      const increment = (value - start) / duration * 10;
      let progress = start;
      const intervalId = setInterval(() => {
        progress += increment;
        if (progress >= value) {
          clearInterval(intervalId);
          progress = value;
        }
        progressRef.current.value = progress;
      }, 10);
    };
    updateProgress(htmlProgressRef, 70, 3000);
    updateProgress(cssProgressRef, 60, 2000);
    updateProgress(pythonProgressRef, 80, 2000);
    updateProgress(mysqlProgressRef, 95, 2000);
    updateProgress(cProgressRef, 80, 2000);
    updateProgress(cppProgressRef, 80, 2000);
    updateProgress(javaProgressRef, 30, 2000);
    updateProgress(reactProgressRef, 50, 2000);
    updateProgress(javaScriptProgressRef, 30, 2000);
  }, []);

  return (
    <div className='stack'>
      {/* <Typography variant='h1' className='skill-text'>I'm aware of...< /Typography> */}
      <Stack direction='row' spacing={5} sx={{justifyContent:'space-evenly'}}>
          <div>
            <img src={html} style={{height:'10rem',width:'10rem'}}/>
            {/* <h1 style={{color:'white'}}>HTML</h1> */}
            <h6><progress ref={htmlProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={css} style={{height:'10rem',width:'8rem'}}/>
            {/* <h1 style={{color:'white'}}>CSS</h1> */}
            <h6><progress ref={cssProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={js} style={{height:'10rem',width:'10rem'}}/>
            {/* <h1 style={{color:'white'}}>JavaScript</h1> */}
            <h6><progress ref={javaScriptProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
      </Stack>
      <Stack direction='row' spacing={5} sx={{marginTop:'2rem',justifyContent:'space-evenly'}}>
          <div>
            <img src={py} style={{height:'10rem',width:'10rem'}}/>
            {/* <h1 style={{color:'white'}}>Python</h1> */}
            <h6><progress ref={pythonProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={reactlog} style={{height:'10rem',width:'10rem'}}/>
            {/* <h1 style={{color:'white'}}>React</h1> */}
            <h6><progress ref={reactProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={sql} style={{height:'10rem',width:'10rem'}}/>
            {/* <h1 style={{color:'white'}}>MySQL</h1> */}
            <h6><progress ref={mysqlProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
      </Stack>
      <Stack direction='row' spacing={5} sx={{marginTop:'2rem',justifyContent:'space-evenly'}}>
          <div>
            <img src={c} style={{height:'10rem',width:'8rem'}}/>
            {/* <h1 style={{color:'white'}}>Python</h1> */}
            <h6><progress ref={cProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={java} style={{height:'10rem',width:'8rem'}}/>
            {/* <h1 style={{color:'white'}}>React</h1> */}
            <h6><progress ref={javaProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
          <div>
            <img src={cpp} style={{height:'10rem',width:'8rem'}}/>
            {/* <h1 style={{color:'white'}}>MySQL</h1> */}
            <h6><progress ref={cppProgressRef} max="100" value="0" className='newbar'></progress></h6>
          </div>
      </Stack>
    </div>
  );
};
export default Skills;
