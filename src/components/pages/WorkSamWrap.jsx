import React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  CardContent,
  Typography,
  Zoom,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EllipsisText from 'react-ellipsis-text';
import { workS } from '../../constants/workSample';
const WorkSamWrap = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      {workS.map((project, index) => (
        <Zoom
          key={index}
          {...(loading ? { timeout: 1000 } : {})}
          in={loading}
          style={{
            transitionDelay: loading ? `${index * 3 + 1}99ms` : '0ms',
          }}
        >
          <Grid xs={12} sm={6} md={6} lg={4} xl={4} sx={{ p: 3 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={project.Imgsrc}
                  alt="alt"
                  width="200"
                  height="200"
                />
                <CardContent>
                  <Typography textAlign="left" variant="body1" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    textAlign="left"
                    variant="body2"
                    color="text.secondary"
                    sx={{ direction: 'ltr' }}
                  >
                    <EllipsisText text={project.discription} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={project.projectLink}
                  size="medium"
                  variant="outlined"
                  color="primary"
                  sx={{
                    backgroundColor: 'steelblue',
                    color: '#fff !important',
                    textDecoration: 'none !important',
                  }}
                  target="_blank"
                >
                  مشاهده سایت
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Zoom>
      ))}
    </>
  );
};

export default WorkSamWrap;
