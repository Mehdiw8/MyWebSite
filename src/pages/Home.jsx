import { useRef, useEffect, useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import bgHome from '../assets/Bubble-20s-1084px.png';
import Typed from 'typed.js';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Hexagon } from '../constants/particlesConfiguration';
import TextTransition, { presets } from 'react-text-transition';
import { Helmet } from 'react-helmet-async';

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const myNameRef = useRef(null);
  const infoRef = useRef(null);

  const string = [' برنامه نویس هستم', ' فریلنسر هستم'];
  useEffect(() => {
    const typedName = new Typed(myNameRef.current, {
      strings: ['مهدی میرزایی'],
      typeSpeed: 110,
      backSpeed: 50,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoRef.current, {
      strings: ['من یک'],
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      showCursor: false,
    });
    const textTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2700);
    return () => {
      typedName.destroy();
      typedInfo.destroy();
      clearInterval(textTransition);
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <Helmet>
        <title> {helmetTitle}</title>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${bgHome})`,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={Hexagon}
        />
        <Typography
          ref={myNameRef}
          variant="h3"
          sx={{
            p: 1,
            color: 'rgb(226,247,255)',
          }}
        ></Typography>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#fff' }}>
            <TextTransition springConfig={presets.gentle}>
              {string[index % string.length]}
            </TextTransition>
          </Typography>
          <Typography
            ref={infoRef}
            variant="h4"
            sx={{ p: 1, color: '#fff' }}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
