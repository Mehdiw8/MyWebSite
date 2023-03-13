import SwipeableViews from 'react-swipeable-views';
import { Home, About, Cv, WorkSamples, Contact } from './index';
import { useContext } from 'react';
import { MainContext } from '../context/index';
import { Pages } from '../components/pages';

const PagesWrapper = ({ handlePageIndex }) => {
  const { pageNumber } = useContext(MainContext);
  return (
    <>
      <SwipeableViews
        axis={'x'}
        index={pageNumber}
        onChangeIndex={handlePageIndex}
      >
        <Pages pageNumber={pageNumber} index={0}>
          <Home helmetTitle="وبسایت شخصی من | صفحه اصلی" />
        </Pages>
        <Pages pageNumber={pageNumber} index={1}>
          {/* About */}
          <About helmetTitle=" وبسایت شخصی | درباره من" />
        </Pages>
        <Pages pageNumber={pageNumber} index={2}>
          <Cv helmetTitle=" وبسایت شخصی | رزومه من" />
        </Pages>
        <Pages pageNumber={pageNumber} index={3}>
          <WorkSamples helmetTitle="وبسایت شخصی | نمونه کار های من" />
        </Pages>
        <Pages pageNumber={pageNumber} index={4}>
          <Contact helmetTitle="وبسایت شخصی | ارتباط با من" />
        </Pages>
      </SwipeableViews>
    </>
  );
};

export default PagesWrapper;
