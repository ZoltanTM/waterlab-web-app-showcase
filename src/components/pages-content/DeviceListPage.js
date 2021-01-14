import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function DeviceListPage(props) {
  /* const allDevicesArray = Mapping function for iterating through devices */
      /* <Device Entry Component>
          <Link to="">
            // Device name
          </Link>
          // Device buttons
          // Device data in table row
      </Device> */

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Device List</h1>
    
    {/* Map section */}
    <div>
        {/* Map */}
        {/* CRUD buttons */}
    </div>

    {/* All Devices Section */}
    <div>
        {/* {allDevicesArray} */}
    </div>

  </>)
};

export default DeviceListPage;