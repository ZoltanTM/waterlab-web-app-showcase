import React from 'react';
import Navbar from '../Navbar';
import ContentWrapper from '../Charts Page/ContentWrapper';
// import ContentWrapper from '../Index Page/ContentWrapper';

class PageWrapper extends React.Component {
  render() {
    return (
      <div id="wrapper">
      {/* <!-- Page Wrapper --> */}

          <Navbar />
          <ContentWrapper />

      {/* <!-- End of Page Wrapper --> */}
      </div>  
    )
  }
}

export default PageWrapper;