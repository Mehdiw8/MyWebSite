import { useState, useEffect } from 'react';
import {
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineItem,
  Timeline,
} from '@mui/lab/';
import { Typography, Slide } from '@mui/material';
import { FcGraduationCap } from 'react-icons/fc';
import { education } from '../../constants/resume';
const EduTimL = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      {education.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          {...(loading ? { timeout: 1000 } : {})}
          in={loading}
          style={{
            transitionDelay: loading ? `${index *2 + 2}99ms` : '0ms',
          }}
        >
          <Timeline position="left" key={index}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="info">
                  <FcGraduationCap style={{ fontSize: '25px' }} />
                </TimelineDot>
                {index !== 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent
                sx={{
                  textAlign: 'left',
                }}
              >
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.proof}
                </Typography>
                <Typography variant="body2" color="initial">
                  {item.Major}
                </Typography>
                <Typography variant="body2" color="initial">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Slide>
      ))}
    </>
  );
};

export default EduTimL;
