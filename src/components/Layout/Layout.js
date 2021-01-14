
import React from 'react';
import { Switch, Route } from 'react-router-dom';  
import 'react-chartjs-2';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import ScrollTop from './ScrollTop';
import LogoutModal from './LogoutModal';

import VerticalBar from '../chart-components/VerticalBar';

// import VerticalBar from '@reactchartjs/react-chart.js';
// '@reactchartjs/react-chart.js'

// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  

class Layout extends React.Component {  
  render() {  
    return (  
      <div>
        {/* <!-- Page Wrapper --> */}  
        <div id="wrapper">  
          <Navbar></Navbar>  

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" class="d-flex flex-column">  
            
            {/* <!-- Main Content --> */}
            <div id="content">  
              <Header />  

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                
                <Switch>
                    <Route path="/overview">

                        {/* <!-- Page Heading --> */}
                        <h1 className="h1 mb-2 text-gray-800">General Overview</h1>
                        
                        <div className="row">
                          <VerticalBar />
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
                    
                    </Route>
                    
                    <Route path="/measurements">

                    </Route>

                    <Route path="/device-list">
                      
                    </Route>
                    
                    <Route path="/single-device">
                      
                    </Route>
                    
                    <Route path="/map">
                      
                    </Route>
                    
                    <Route path="/contact">
                      
                    </Route>
                    
                    <Route path="/profile">
                      
                    </Route>
                </Switch>
                
              </div>
              {/* <!-- End of Page Content --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            <Footer />  
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}

        <ScrollTop />
        <LogoutModal/>
      </div>  
    )  
  }  
}  
  
export default Layout;