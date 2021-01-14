import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function MeasurementsPage(props) {
  // const warningDevices = mapping function for iterating through warnings for all devices
  //    <Warning Device Entry Component></Device>

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Measurements</h1>

    {/* Warnings section */}
    <div>
        {/* {warningDevices} */}
    </div>

    {/* Measurements Section */}
    <div>
        {/* pH levels chart */}
        <div>
            <h3>pH Levels</h3>
        </div>

        {/* Conductivity Levels Chart*/}
        <div>
            <h3>Conductivity Levels</h3>
        </div>

        {/* Temperature Levels Chart */}
        <div>
            <h3>Temperature Levels</h3>
        </div>
    </div>
  </>)
};

export default MeasurementsPage;