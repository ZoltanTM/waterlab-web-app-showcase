import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function OverviewPage(props) {
  return (
  <>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Overview</h1>
    
    {/* Map Section */}
    <div>
      {/* Map */}
      {/* Container with buttons to devices */}
    </div>
    
    {/* Warnings Section */}
    <div>
        {/* Conditional for displaying device with warning */}
        {/* Device name */}
        {/* Device data in tabel */}
        
        {/* Device data in chart */}
        <div className="row">
            <VerticalBar />
        </div>
    </div>

    
    {/* <!-- Content Row --> */}
    <div className="row">
        <div className="col-xl-8 col-lg-7">

            {/* <!-- Area Chart --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Pollution level</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        {/* <canvas id="myAreaChart"></canvas> */}
                        <VerticalBar />
                    </div>
                </div>
            </div>

            {/* <!-- Bar Chart --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">pH level</h6>
                </div>
                <div className="card-body">
                    <div className="chart-bar">
                        {/* <canvas id="myBarChart"></canvas> */}
                        <VerticalBar />
                    </div>
                </div>
            </div> 
        </div>                     
    </div>
  </>
  )
};

export default OverviewPage;