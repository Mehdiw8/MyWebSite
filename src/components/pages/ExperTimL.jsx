import { useState, useEffect } from 'react';
import {
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineItem,
  Timeline,
} from '@mui/lab/';
import { Typography, Slide } from '@mui/material';
import { FcBriefcase } from 'react-icons/fc';
import { experiance } from '../../constants/resume';

const ExperTimL = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <div>
      {experiance.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          {...(loading ? { timeout: 1000 } : {})}
          style={{
            transitionDelay: loading ? `${index + 5}99ms` : '0ms',
          }}
        >
          <Timeline position="left" key={index}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="warning">
                  <FcBriefcase style={{ fontSize: '25px' }} />
                </TimelineDot>
                {/* {index !== 1 && <TimelineConnector />} */}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  textAlign: 'left',
                }}
              >
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body2" color="initial">
                  {item.company}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.position}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.work}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Slide>
      ))}
    </div>
  );
};

export default ExperTimL;
