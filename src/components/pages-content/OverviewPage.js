import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function OverviewPage(props) {
//   LOGIC CODE GOES HERE !!
  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3syXNR2ev7O-pzaq4vm7k8RFThqHM-lU&callback=initMap&libraries=&v=weekly" 
      defer
    ></script>

  function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 54.9629533, lng: 9.7766695 },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
  { lat: 54.905306, lng: 9.654167 },
  { lat: 54.998056, lng: 9.670972 },
  { lat: 55.050194, lng: 9.806806 },
];

  
  //LOGIC END

  return (
  <>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Overview</h1>
    
    {/* Map Section 2 */}
    <div class="text-xs font-weight-bold text-uppercase mb-1">
        <h2>Map</h2>
    </div>
    
    <div class="row">

        {/* Map with devices */}
        <div class="col-xl-9 col-lg-8">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Map of WaterLab devices</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">

                        {/* ZOLTAN'S TASK  */}
                        <iframe title="map" class="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="300" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons with devices */}
        <div class="col-xl-3 col-lg-4">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Devices</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">
                        {/* Container with buttons to devices */}
                                    {/* <div className="col"> */}
                                        <ul style={{height: 290,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-around",
                                                    listStyle: "none" }}>

                                            <li><button>Device Proof of Concept</button></li>
                                            <li><button>Device Test Well</button></li>
                                            <li><button>Mock Device #1</button></li>
                                            <li><button>Mock Device #2</button></li>
                                            <li><button>Mock Device #3</button></li>
                                        </ul>
                                    {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Warnings Section */}
    <div>
        <div class="text-xs font-weight-bold text-uppercase mb-1">
            <h2>Warnings</h2>
        </div>
        
        {/* Conditional for displaying device with warning */}
        {/* Device name */}
        {/* Device data in tabel */}
        
        <div class="row">

            {/* Warning #1 */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-danger">Warning #{1}</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Choose an option:</div>
                                <a class="dropdown-item" href="#">Reload data</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Close</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                        <div class="">
                            <VerticalBar options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning #2 */}
            <div class="col-xl-12 col-lg-12">
                <div class="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-danger">Warning #{2}</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Choose an option:</div>
                                <a class="dropdown-item" href="#">Reload data</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Close</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                        <div class="">
                            <VerticalBar options={{ maintainAspectRatio: false }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </>
  )
};

export default OverviewPage;
