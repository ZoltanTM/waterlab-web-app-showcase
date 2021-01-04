import React from 'react';
import Sidebar from '../Sidebar';
import ContentWrapper from '../ContentWrapper';

class PageWrapper extends React.Component {
  render() {
    return (
      <div id="wrapper">
      {/* <!-- Page Wrapper --> */}

          <Sidebar />
          <ContentWrapper />

      {/* <!-- End of Page Wrapper --> */}
      </div>  
    )
  }
}

export default PageWrapper;