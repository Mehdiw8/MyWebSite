import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { skills } from '../../constants/skills';
import { Skill } from './';
const Skills = () => {
  const {
    gitSkills,
    reactSkills,
    materialUi,
    jsSkills,
    cssSkills,
    htmlSkills,
  } = skills;
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);
  const [git, setGit] = useState(0);
  const [mui, setMui] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 87);
      });
      setCss((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 83);
      });
      setJs((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 61);
      });
      setReact((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 72);
      });
      setGit((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 56);
      });
      setMui((prevState) => {
        const addCount = Math.floor(Math.random() * 10);
        return Math.min(prevState + addCount, 69);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Skill
        color={htmlSkills.color}
        icon={htmlSkills.icon}
        name={htmlSkills.name}
        value={html}
      />
      <Skill
        color={cssSkills.color}
        icon={cssSkills.icon}
        name={cssSkills.name}
        value={css}
      />
      <Skill
        color={jsSkills.color}
        icon={jsSkills.icon}
        name={jsSkills.name}
        value={js}
      />
      <Skill
        color={reactSkills.color}
        icon={reactSkills.icon}
        name={reactSkills.name}
        value={react}
      />
      <Skill
        color={materialUi.color}
        icon={materialUi.icon}
        name={materialUi.name}
        value={mui}
      />
      <Skill
        color={gitSkills.color}
        icon={gitSkills.icon}
        name={gitSkills.name}
        value={git}
      />
    </Box>
  );
};

export default Skills;
