import { Box } from '@mui/material';
const Pages = (props) => {
  const { children, pageNumber, index, ...others } = props;
  return (
    <>
      <div
        role="tabpanel"
        hidden={pageNumber !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`sidebar-tab${index}`}
        {...others}
      >
        {pageNumber === index && (
          <Box sx={{ height: '100vh', overflow: 'hidden' }}>{children}</Box>
        )}
      </div>
    </>
  );
};

export default Pages;
